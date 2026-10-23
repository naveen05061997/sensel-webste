import tls from "tls";
import net from "net";

export interface SmtpSendOptions {
  host: string;
  port: number;
  user: string;
  pass: string;
  fromName?: string;
  fromEmail: string;
  to: string[];
  cc?: string[];
  bcc?: string[];
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
}

/**
 * Builds RFC 2047 / MIME compliant email with base64 encoding
 */
function buildMimeMessage(options: SmtpSendOptions): string {
  const boundary = `----=_SenselPart_${Date.now()}_${Math.random().toString(36).substring(2)}`;
  const fromHeader = `"${options.fromName || "Sensel Telematics"}" <${options.fromEmail}>`;
  const encodedSubject = `=?UTF-8?B?${Buffer.from(options.subject).toString("base64")}?=`;

  const headers = [
    `From: ${fromHeader}`,
    `To: ${options.to.join(", ")}`,
    options.cc && options.cc.length > 0 ? `Cc: ${options.cc.join(", ")}` : null,
    options.replyTo ? `Reply-To: ${options.replyTo}` : null,
    `Subject: ${encodedSubject}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <sensel-${Date.now()}-${Math.random().toString(36).substring(2)}@sensel.in>`,
    `MIME-Version: 1.0`,
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
  ]
    .filter(Boolean)
    .join("\r\n");

  const mimeBody = [
    headers,
    "",
    `--${boundary}`,
    `Content-Type: text/plain; charset=UTF-8`,
    `Content-Transfer-Encoding: base64`,
    "",
    Buffer.from(options.text).toString("base64"),
    "",
    `--${boundary}`,
    `Content-Type: text/html; charset=UTF-8`,
    `Content-Transfer-Encoding: base64`,
    "",
    Buffer.from(options.html).toString("base64"),
    "",
    `--${boundary}--`,
    "",
  ].join("\r\n");

  return mimeBody;
}

/**
 * Native, zero-dependency SMTP client supporting SSL (465) and STARTTLS (587).
 * Works directly in Node.js / Next.js without requiring external npm packages.
 */
export async function sendMailViaSmtp(options: SmtpSendOptions): Promise<{ success: boolean; messageId: string }> {
  // If nodemailer is installed in the project, prefer it
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const nodemailer = require("nodemailer");
    if (nodemailer && typeof nodemailer.createTransport === "function") {
      const transporter = nodemailer.createTransport({
        host: options.host,
        port: options.port,
        secure: options.port === 465,
        auth: {
          user: options.user,
          pass: options.pass,
        },
      });

      const info = await transporter.sendMail({
        from: `"${options.fromName || "Sensel Telematics"}" <${options.fromEmail}>`,
        to: options.to,
        cc: options.cc,
        bcc: options.bcc,
        replyTo: options.replyTo,
        subject: options.subject,
        text: options.text,
        html: options.html,
      });

      return { success: true, messageId: info.messageId || "sent-via-nodemailer" };
    }
  } catch {
    // Fall through to native SMTP engine
  }

  // Native SMTP implementation
  return new Promise((resolve, reject) => {
    const isDirectTls = options.port === 465;
    let socket: net.Socket | tls.TLSSocket;
    let buffer = "";
    let step = 0;

    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error("SMTP Connection Timeout (20s)"));
    }, 20000);

    function cleanup() {
      clearTimeout(timeout);
      if (socket && !socket.destroyed) {
        socket.destroy();
      }
    }

    function sendCommand(cmd: string) {
      if (socket && !socket.destroyed) {
        socket.write(cmd + "\r\n");
      }
    }

    const allRecipients = Array.from(
      new Set([
        ...options.to,
        ...(options.cc || []),
        ...(options.bcc || []),
      ])
    ).filter(Boolean);

    let recipientIndex = 0;

    function handleResponse(response: string) {
      const lines = response.split("\r\n").filter(Boolean);
      const lastLine = lines[lines.length - 1] || "";
      const code = parseInt(lastLine.substring(0, 3), 10);

      // Check for error responses
      if (code >= 400) {
        cleanup();
        return reject(new Error(`SMTP Error [${code}]: ${lastLine}`));
      }

      // State machine for SMTP conversation
      if (step === 0 && code === 220) {
        // Greeted by server -> send EHLO
        step = 1;
        sendCommand(`EHLO sensel.in`);
      } else if (step === 1 && code === 250) {
        if (!isDirectTls && options.port === 587) {
          // Send STARTTLS
          step = 2;
          sendCommand("STARTTLS");
        } else {
          // Direct TLS on 465 -> Start AUTH
          step = 4;
          sendCommand("AUTH LOGIN");
        }
      } else if (step === 2 && code === 220) {
        // Server ready for TLS upgrade
        step = 3;
        socket.removeAllListeners("data");
        socket.removeAllListeners("error");

        const secureSocket = tls.connect({
          socket,
          host: options.host,
          servername: options.host,
          rejectUnauthorized: false,
        });

        socket = secureSocket;
        attachListeners(secureSocket);

        secureSocket.once("secureConnect", () => {
          // Send EHLO again over TLS
          sendCommand("EHLO sensel.in");
        });
      } else if (step === 3 && code === 250) {
        // Post-STARTTLS EHLO response -> start AUTH
        step = 4;
        sendCommand("AUTH LOGIN");
      } else if (step === 4 && code === 334) {
        // Send base64 username
        step = 5;
        sendCommand(Buffer.from(options.user).toString("base64"));
      } else if (step === 5 && code === 334) {
        // Send base64 password
        step = 6;
        sendCommand(Buffer.from(options.pass).toString("base64"));
      } else if (step === 6 && (code === 235 || code === 250)) {
        // Authenticated! Send MAIL FROM
        step = 7;
        sendCommand(`MAIL FROM:<${options.fromEmail}>`);
      } else if (step === 7 && code === 250) {
        // Send first RCPT TO
        step = 8;
        recipientIndex = 0;
        sendCommand(`RCPT TO:<${allRecipients[recipientIndex]}>`);
      } else if (step === 8 && code === 250) {
        recipientIndex++;
        if (recipientIndex < allRecipients.length) {
          sendCommand(`RCPT TO:<${allRecipients[recipientIndex]}>`);
        } else {
          // All recipients acknowledged -> send DATA
          step = 9;
          sendCommand("DATA");
        }
      } else if (step === 9 && code === 354) {
        // Server ready for message body
        step = 10;
        const mime = buildMimeMessage(options);
        // Replace single dot on line with double dot (SMTP dot-stuffing)
        const safeMime = mime.replace(/\r\n\./g, "\r\n..");
        socket.write(safeMime + "\r\n.\r\n");
      } else if (step === 10 && code === 250) {
        // Message accepted! Send QUIT
        step = 11;
        sendCommand("QUIT");
        clearTimeout(timeout);
        const match = lastLine.match(/\b([0-9a-zA-Z._-]+)\b$/);
        const messageId = match ? match[1] : `smtp-${Date.now()}`;
        resolve({ success: true, messageId });
      }
    }

    function onData(chunk: Buffer) {
      buffer += chunk.toString("utf8");

      // An SMTP response block is finished when the buffer ends with CRLF
      // AND the last line starts with a 3-digit code followed by a space
      if (!buffer.endsWith("\r\n")) {
        return;
      }

      const lines = buffer.split("\r\n").filter(Boolean);
      const lastLine = lines[lines.length - 1];

      if (lastLine && /^\d{3} /.test(lastLine)) {
        const fullResponse = buffer;
        buffer = "";
        handleResponse(fullResponse);
      }
    }

    function attachListeners(s: net.Socket | tls.TLSSocket) {
      s.on("data", onData);
      s.on("error", (err) => {
        cleanup();
        reject(err);
      });
      s.on("close", () => {
        clearTimeout(timeout);
      });
    }

    // Initiate connection
    if (isDirectTls) {
      socket = tls.connect({
        host: options.host,
        port: options.port,
        servername: options.host,
        rejectUnauthorized: false,
      });
      attachListeners(socket);
    } else {
      socket = net.connect({
        host: options.host,
        port: options.port,
      });
      attachListeners(socket);
    }
  });
}
