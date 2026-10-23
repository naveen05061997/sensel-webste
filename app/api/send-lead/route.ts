import { NextResponse } from "next/server";
import { sendMailViaSmtp } from "@/lib/smtpTransport";
import { isValidEmail } from "@/lib/validation";
import { insertWebsiteLead } from "@/lib/db";

export const dynamic = "force-dynamic";

/* ─────────────────────────────────────────────────────────────
   Sensel SMTP Configuration:
   - Sender: info@sensel.in ("India Leading telematics solution provider")
   - To: info@sensel.in
   - CC: psr@sensel.in, rsrini@sensel.in, rajesh.koushik@sensel.in
   - BCC: naveen@sensel.in
   - Subject: Sensel Request a Demo (Lead) - [Lead Name] | [Solution]
   ───────────────────────────────────────────────────────────── */
const SENDER_EMAIL = "info@sensel.in";
const SENDER_NAME = "India Leading telematics solution provider";

const TO_EMAIL = "info@sensel.in";
const CC_EMAILS = [
  "psr@sensel.in",
  "rsrini@sensel.in",
  "rajesh.koushik@sensel.in",
];
const BCC_EMAILS = ["naveen@sensel.in"];

interface LeadPayload {
  formType?: string;
  fullName?: string;
  name?: string;
  workEmail?: string;
  email?: string;
  phoneNumber?: string;
  phone?: string;
  companyName?: string;
  solution?: string;
  assetFleetCount?: number | string;
  privacyConsent?: boolean;
  marketingConsent?: boolean;
  submittedAt?: string;
}

/**
 * Builds a modern, high-grade corporate HTML email template with Thanks & Regards section
 */
function buildModernHtmlEmail(
  data: LeadPayload,
  leadName: string,
  leadEmail: string,
  leadPhone: string,
  timestampFormatted: string
): string {
  const company = data.companyName ? data.companyName.trim() : "Not specified";
  const solution = data.solution ? data.solution.trim() : "General IoT Telematics Inquiry";
  const fleetCount = data.assetFleetCount ? `${data.assetFleetCount} units` : "Not specified";
  const formType = data.formType || "Website Lead Portal";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sensel Request a Demo (Lead)</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      color: #0f172a;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #f8fafc;
      padding: 36px 12px;
    }
    .container {
      max-width: 620px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 15px 35px -5px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(226, 232, 240, 0.8);
    }
    .header {
      background: linear-gradient(135deg, #070b14 0%, #0d1e3d 60%, #0a2560 100%);
      padding: 34px 32px 30px;
      text-align: left;
      border-bottom: 3px solid #0052cc;
    }
    .badge {
      display: inline-block;
      padding: 4px 12px;
      background: rgba(37, 99, 235, 0.2);
      border: 1px solid rgba(96, 165, 250, 0.4);
      border-radius: 20px;
      color: #93c5fd;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      margin-bottom: 12px;
    }
    .header h1 {
      margin: 0;
      color: #ffffff;
      font-size: 23px;
      font-weight: 800;
      letter-spacing: -0.4px;
      line-height: 1.25;
    }
    .header p {
      margin: 8px 0 0;
      color: #cbd5e1;
      font-size: 13px;
      font-weight: 400;
    }
    .content {
      padding: 32px 32px 24px;
    }
    .lead-banner {
      background: linear-gradient(to right, #eff6ff 0%, #f8fafc 100%);
      border: 1px solid #dbeafe;
      border-left: 4px solid #0052cc;
      border-radius: 12px;
      padding: 18px 22px;
      margin-bottom: 26px;
    }
    .lead-banner-label {
      font-size: 11px;
      font-weight: 700;
      color: #1e40af;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      margin: 0 0 4px;
    }
    .lead-banner-name {
      font-size: 19px;
      font-weight: 800;
      color: #0f172a;
      margin: 0;
      letter-spacing: -0.3px;
    }
    .lead-banner-sub {
      font-size: 13px;
      color: #475569;
      margin: 5px 0 0;
    }
    .section-title {
      font-size: 13px;
      font-weight: 700;
      color: #334155;
      text-transform: uppercase;
      letter-spacing: 0.7px;
      margin: 0 0 14px;
      padding-bottom: 8px;
      border-bottom: 1px solid #e2e8f0;
    }
    table.data-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 26px;
    }
    table.data-table tr {
      border-bottom: 1px solid #f1f5f9;
    }
    table.data-table td {
      padding: 12px 6px;
      font-size: 13.5px;
      vertical-align: middle;
    }
    table.data-table td.label {
      width: 36%;
      font-weight: 600;
      color: #64748b;
      font-size: 12px;
    }
    table.data-table td.value {
      width: 64%;
      font-weight: 600;
      color: #0f172a;
    }
    .highlight-badge {
      display: inline-block;
      padding: 3px 10px;
      background-color: #f1f5f9;
      color: #0f172a;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      font-weight: 700;
      font-size: 12px;
    }
    .actions-box {
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 16px 20px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 12px;
    }
    .btn {
      display: inline-block;
      padding: 10px 20px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 700;
      font-size: 13px;
      text-align: center;
    }
    .btn-primary {
      background-color: #0052cc;
      color: #ffffff !important;
    }
    .btn-secondary {
      background-color: #ffffff;
      color: #0f172a !important;
      border: 1px solid #cbd5e1;
      margin-left: 10px;
    }
    /* ── Thanks & Regards Modern Section ── */
    .regards-card {
      background-color: #ffffff;
      padding: 26px 32px 30px;
      border-top: 1px dashed #e2e8f0;
    }
    .regards-lead {
      font-size: 14px;
      font-weight: 600;
      color: #334155;
      margin: 0 0 6px;
    }
    .regards-brand {
      font-size: 16px;
      font-weight: 800;
      color: #0052cc;
      margin: 0 0 2px;
      letter-spacing: -0.2px;
    }
    .regards-tagline {
      font-size: 12px;
      font-weight: 600;
      color: #64748b;
      margin: 0 0 16px;
    }
    .regards-details {
      background-color: #f8fafc;
      border-radius: 10px;
      padding: 14px 18px;
      border: 1px solid #e2e8f0;
      font-size: 12px;
      color: #475569;
      line-height: 1.65;
    }
    .regards-details strong {
      color: #0f172a;
    }
    .regards-details a {
      color: #0052cc;
      text-decoration: none;
      font-weight: 600;
    }
    .footer-disclaimer {
      padding: 16px 32px 24px;
      text-align: center;
      background-color: #f8fafc;
      border-top: 1px solid #e2e8f0;
      font-size: 11px;
      color: #94a3b8;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      
      <!-- Top Header -->
      <div class="header">
        <div class="badge">Sensel Telematics &bull; Automated Lead Dispatch</div>
        <h1>Sensel Request a Demo (Lead)</h1>
        <p>Source: <strong>${formType}</strong> &bull; Received: <strong>${timestampFormatted}</strong></p>
      </div>

      <!-- Main Body -->
      <div class="content">
        
        <!-- Lead Highlight Box -->
        <div class="lead-banner">
          <p class="lead-banner-label">New Prospect Overview</p>
          <p class="lead-banner-name">${leadName}</p>
          <p class="lead-banner-sub">
            ${company !== "Not specified" ? `Company: <strong>${company}</strong> &bull; ` : ""}
            Solution: <strong style="color: #0052cc;">${solution}</strong>
          </p>
        </div>

        <p class="section-title">Submitted Lead Details</p>

        <!-- Form Fields Table -->
        <table class="data-table">
          <tbody>
            <tr>
              <td class="label">Lead Source</td>
              <td class="value"><span class="highlight-badge">${formType}</span></td>
            </tr>
            <tr>
              <td class="label">Contact Name</td>
              <td class="value"><strong>${leadName}</strong></td>
            </tr>
            <tr>
              <td class="label">Work Email</td>
              <td class="value"><a href="mailto:${leadEmail}" style="color: #0052cc; text-decoration: none; font-weight: 700;">${leadEmail}</a></td>
            </tr>
            <tr>
              <td class="label">Phone Number</td>
              <td class="value"><a href="tel:${leadPhone.replace(/\s+/g, '')}" style="color: #0052cc; text-decoration: none; font-weight: 700;">${leadPhone}</a></td>
            </tr>
            <tr>
              <td class="label">Company Name</td>
              <td class="value">${company}</td>
            </tr>
            <tr>
              <td class="label">Selected Solution</td>
              <td class="value"><strong style="color: #0052cc;">${solution}</strong></td>
            </tr>
            ${data.assetFleetCount ? `
            <tr>
              <td class="label">Fleet / Asset Size</td>
              <td class="value"><span class="highlight-badge">${fleetCount}</span></td>
            </tr>
            ` : ""}
            ${data.privacyConsent !== undefined ? `
            <tr>
              <td class="label">Privacy Policy</td>
              <td class="value" style="color: #16a34a;">&check; Accepted by user</td>
            </tr>
            ` : ""}
            ${data.marketingConsent !== undefined ? `
            <tr>
              <td class="label">Marketing Opt-in</td>
              <td class="value">${data.marketingConsent ? '<span style="color: #16a34a;">&check; Yes, consented</span>' : '<span style="color: #64748b;">Not opted-in</span>'}</td>
            </tr>
            ` : ""}
            <tr>
              <td class="label">Received At</td>
              <td class="value" style="color: #64748b; font-weight: 500;">${timestampFormatted} (IST)</td>
            </tr>
          </tbody>
        </table>

        <!-- Quick Reply Action Bar -->
        <div class="actions-box">
          <a href="mailto:${leadEmail}?subject=Re:%20Sensel%20Telematics%20Demo%20Request" class="btn btn-primary">
            &rarr; Reply to Lead Email
          </a>
          <a href="tel:${leadPhone.replace(/\s+/g, '')}" class="btn btn-secondary">
            &#9742; Call Lead (${leadPhone})
          </a>
        </div>

      </div>

      <!-- Thanks & Regards Section (Modern Corporate Format) -->
      <div class="regards-card">
        <p class="regards-lead">Thanks &amp; Best Regards,</p>
        <p class="regards-brand">Sensel Telematics Automation Team</p>
        <p class="regards-tagline">India&apos;s Leading Telematics &amp; Industrial IoT Solution Provider</p>
        
        <div class="regards-details">
          <strong>Sensel Telematics Pvt. Ltd.</strong><br>
          Ground Floor, IndiQube Omega, Maruti Emerald, Brookefield,<br>
          ITPL Main Road, Bangalore &ndash; 560037, Karnataka, India<br>
          Direct: <strong>+91-80-41693607</strong> &bull; Support: <a href="mailto:info@sensel.in">info@sensel.in</a> &bull; Web: <a href="https://sensel.in">www.sensel.in</a>
        </div>
      </div>

      <!-- Footer Disclaimer -->
      <div class="footer-disclaimer">
        This is an automated notification securely dispatched from the Sensel Telematics website portal.<br>
        Confidential &bull; Sensel Telematics Pvt. Ltd. &copy; ${new Date().getFullYear()} All Rights Reserved.
      </div>

    </div>
  </div>
</body>
</html>`;
}

/**
 * Builds clean plain-text fallback format with modern signature
 */
function buildModernPlainText(
  data: LeadPayload,
  leadName: string,
  leadEmail: string,
  leadPhone: string,
  timestampFormatted: string
): string {
  return `===============================================================
SENSEL TELEMATICS - NEW DEMO / BUSINESS LEAD
===============================================================

Subject: Sensel Request a Demo (Lead)
Source:  ${data.formType || "Website Lead Portal"}
Time:    ${timestampFormatted} (IST)

LEAD DETAILS:
---------------------------------------------------------------
- Full Name:         ${leadName}
- Work Email:        ${leadEmail}
- Phone Number:      ${leadPhone}
- Company Name:      ${data.companyName || "Not specified"}
- Selected Solution: ${data.solution || "General IoT Telematics Inquiry"}
- Fleet/Asset Size:  ${data.assetFleetCount ? `${data.assetFleetCount} units` : "Not specified"}
- Privacy Consent:   ${data.privacyConsent ? "Accepted" : "N/A"}
- Marketing Consent: ${data.marketingConsent ? "Yes" : "No"}

QUICK ACTIONS:
---------------------------------------------------------------
- Reply directly: mailto:${leadEmail}
- Call directly:  tel:${leadPhone}

---------------------------------------------------------------
Thanks & Best Regards,
Sensel Telematics Automation Team
India's Leading Telematics & Industrial IoT Solution Provider

Sensel Telematics Pvt. Ltd.
Ground Floor, IndiQube Omega, Maruti Emerald, Brookefield,
ITPL Main Road, Bangalore - 560037, Karnataka, India
Phone: +91-80-41693607 | Email: info@sensel.in | Web: https://sensel.in
===============================================================`;
}

export async function POST(req: Request) {
  try {
    const payload: LeadPayload = await req.json();

    const leadName = (payload.fullName || payload.name || "Sensel Visitor").trim();
    const leadEmail = (payload.workEmail || payload.email || "").trim();
    const leadPhone = (payload.phoneNumber || payload.phone || "").trim();

    if (!leadEmail && !leadPhone) {
      return NextResponse.json(
        { success: false, error: "Please provide an email or phone number." },
        { status: 400 }
      );
    }

    if (leadEmail && !isValidEmail(leadEmail)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address (e.g. name@company.com)." },
        { status: 400 }
      );
    }

    const timestampFormatted = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Modern Subject line containing the exact phrase required plus lead name
    const subject = `Sensel Request a Demo (Lead) - ${leadName}${payload.companyName ? ` (${payload.companyName})` : ""}`;
    const html = buildModernHtmlEmail(payload, leadName, leadEmail, leadPhone, timestampFormatted);
    const text = buildModernPlainText(payload, leadName, leadEmail, leadPhone, timestampFormatted);

    // Read SMTP environment variables & clean password
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER || SENDER_EMAIL;
    const rawPass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS || "";
    const smtpPass = rawPass.trim().replace(/\s+/g, "");

    let emailStatus = "PENDING";
    let emailMessageId: string | undefined;
    let emailError: string | undefined;

    // Dispatch via SMTP if password configured
    if (!smtpPass) {
      emailStatus = "SIMULATED";
      console.log("─────────────────────────────────────────────────────────────");
      console.log("⚡ [SENSEL SMTP SIMULATION MODE - SMTP_PASSWORD NOT SET YET]");
      console.log(`Host:    ${smtpHost}:${smtpPort}`);
      console.log(`From:    "${SENDER_NAME}" <${SENDER_EMAIL}>`);
      console.log(`To:      ${TO_EMAIL}`);
      console.log(`CC:      ${CC_EMAILS.join(", ")}`);
      console.log(`BCC:     ${BCC_EMAILS.join(", ")}`);
      console.log(`ReplyTo: ${leadEmail}`);
      console.log(`Subject: ${subject}`);
      console.log("Payload:", payload);
      console.log("─────────────────────────────────────────────────────────────");
    } else {
      try {
        const result = await sendMailViaSmtp({
          host: smtpHost,
          port: smtpPort,
          user: smtpUser,
          pass: smtpPass,
          fromName: SENDER_NAME,
          fromEmail: SENDER_EMAIL,
          to: [TO_EMAIL],
          cc: CC_EMAILS,
          bcc: BCC_EMAILS,
          replyTo: leadEmail || SENDER_EMAIL,
          subject: subject,
          html: html,
          text: text,
        });

        emailStatus = "SENT";
        emailMessageId = result.messageId;
        console.log("✅ [Sensel Lead Email Dispatched Successfully via SMTP]:", result.messageId);
      } catch (err: any) {
        emailStatus = "FAILED";
        emailError = err?.message || "Failed to dispatch email via SMTP";
        console.error("[Sensel SMTP Error]:", err);
      }
    }

    // Insert lead into MySQL database table (websiteLead)
    const dbResult = await insertWebsiteLead({
      fullName: leadName,
      email: leadEmail,
      phone: leadPhone,
      companyName: payload.companyName,
      solution: payload.solution,
      assetFleetCount: payload.assetFleetCount,
      formType: payload.formType || "Website Lead Portal",
      privacyConsent: payload.privacyConsent ?? true,
      marketingConsent: payload.marketingConsent ?? false,
      emailStatus: emailStatus,
    });

    // If SMTP was configured and failed, and DB also failed, return 500
    if (smtpPass && emailStatus === "FAILED" && !dbResult.inserted) {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to dispatch email and could not save lead to database.",
          details: { emailError, dbError: dbResult.error },
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead processed successfully.",
      email: {
        status: emailStatus,
        messageId: emailMessageId,
        ...(emailError ? { error: emailError } : {}),
      },
      database: {
        inserted: dbResult.inserted,
        insertId: dbResult.insertId,
        ...(dbResult.reason ? { note: dbResult.reason } : {}),
        ...(dbResult.error ? { error: dbResult.error } : {}),
      },
    });

  } catch (error: any) {
    console.error("[Sensel Lead API Error]:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to process lead request." },
      { status: 500 }
    );
  }
}

/**
 * Diagnostic GET endpoint (requires ?test=true to trigger verification email)
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    if (searchParams.get("test") !== "true") {
      return NextResponse.json({
        status: "active",
        service: "Sensel Telematics Lead SMTP Gateway",
        authenticatedSender: SENDER_EMAIL,
        recipients: {
          to: TO_EMAIL,
          cc: CC_EMAILS,
          bcc: BCC_EMAILS,
        },
      });
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER || SENDER_EMAIL;
    const rawPass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS || "";
    const smtpPass = rawPass.trim().replace(/\s+/g, "");

    if (!smtpPass) {
      return NextResponse.json({
        success: false,
        error: "SMTP_PASSWORD is not set in .env.local",
      });
    }

    const testSubject = "Sensel SMTP Test Connection (Verification)";
    const testHtml = "<p>This is a test email confirming Sensel Google Workspace SMTP is connected and working successfully.</p>";
    const testText = "This is a test email confirming Sensel Google Workspace SMTP is connected and working successfully.";

    const result = await sendMailViaSmtp({
      host: smtpHost,
      port: smtpPort,
      user: smtpUser,
      pass: smtpPass,
      fromName: SENDER_NAME,
      fromEmail: SENDER_EMAIL,
      to: [TO_EMAIL],
      cc: CC_EMAILS,
      bcc: BCC_EMAILS,
      subject: testSubject,
      html: testHtml,
      text: testText,
    });

    return NextResponse.json({
      success: true,
      message: "Test email dispatched successfully via SMTP!",
      messageId: result.messageId,
      recipients: {
        to: TO_EMAIL,
        cc: CC_EMAILS,
        bcc: BCC_EMAILS,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "SMTP test failed" },
      { status: 500 }
    );
  }
}

