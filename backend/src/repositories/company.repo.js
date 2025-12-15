import { getDB } from "../config/db.js";

export const createCompany = async (name, logoUrl) => {
  const db = await getDB();
  const [r] = await db.query(
    `INSERT INTO companies (company_name, company_logo_url, is_active)
     VALUES (?, ?, FALSE)`,
    [name, logoUrl]
  );
  return r.insertId;
};

export const activateCompanyByZohoSub = async (subId) => {
  const db = await getDB();
  await db.query(
    `UPDATE companies
     SET payment_status='SUCCESS',
         subscription_status='ACTIVE',
         is_active=TRUE
     WHERE zoho_subscription_id=?`,
    [subId]
  );
};
