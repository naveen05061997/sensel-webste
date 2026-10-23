/**
 * MySQL Database Helper for Sensel websiteLead table
 * Uses connection pooling and parameterized queries to safely insert leads.
 */

let pool: any = null;

export interface WebsiteLeadData {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  solution?: string;
  assetFleetCount?: string | number;
  formType: string;
  privacyConsent?: boolean;
  marketingConsent?: boolean;
  emailStatus?: string;
}

export async function insertWebsiteLead(leadData: WebsiteLeadData): Promise<{
  inserted: boolean;
  insertId?: number;
  error?: string;
  reason?: string;
}> {
  const host = process.env.MYSQL_HOST || process.env.DB_HOST;
  const user = process.env.MYSQL_USER || process.env.DB_USER;
  const password = process.env.MYSQL_PASSWORD || process.env.DB_PASSWORD || "";
  const database = process.env.MYSQL_DATABASE || process.env.DB_NAME;
  const port = Number(process.env.MYSQL_PORT || process.env.DB_PORT) || 3306;

  // If MySQL credentials are not configured yet, skip insert gracefully without failing
  if (!host || !user || !database) {
    console.log("[MySQL websiteLead] Database credentials not configured in environment variables. Skipping DB insert.");
    return { inserted: false, reason: "MYSQL_HOST, MYSQL_USER, or MYSQL_DATABASE not set in environment" };
  }

  let mysql: any = null;
  const packageName = "mysql2/promise";
  try {
    // Use Webpack runtime bypass so dev server does not fail before npm install mysql2
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const nodeRequire = typeof __non_webpack_require__ !== "undefined"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ? __non_webpack_require__
      : eval("require");
    mysql = nodeRequire(packageName);
  } catch {
    console.warn("[MySQL websiteLead] mysql2 module not installed yet. Run 'npm install mysql2' to enable MySQL storage.");
    return {
      inserted: false,
      reason: "mysql2 package not installed in node_modules yet. Run: npm install mysql2",
    };
  }

  const driver = (mysql && mysql.default) ? mysql.default : mysql;

  try {
    if (!pool) {
      pool = driver.createPool({
        host,
        port,
        user,
        password,
        database,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        ssl: process.env.MYSQL_SSL === "true" ? { rejectUnauthorized: false } : undefined,
      });
    }

    const query = `
      INSERT INTO \`websiteLead\` 
      (full_name, email, phone, company_name, solution, asset_fleet_count, form_type, privacy_consent, marketing_consent, email_status, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    `;

    const values = [
      leadData.fullName,
      leadData.email,
      leadData.phone,
      leadData.companyName || null,
      leadData.solution || null,
      leadData.assetFleetCount ? String(leadData.assetFleetCount) : null,
      leadData.formType,
      leadData.privacyConsent ? 1 : 0,
      leadData.marketingConsent ? 1 : 0,
      leadData.emailStatus || "SENT",
    ];

    const [result]: any = await pool.execute(query, values);
    console.log("✅ [MySQL websiteLead Inserted Successfully]: ID =", result?.insertId);
    return { inserted: true, insertId: result?.insertId };
  } catch (error: any) {
    console.error("[MySQL websiteLead Error]:", error);
    return { inserted: false, error: error?.message || "Failed to insert into websiteLead" };
  }
}
