import { getDB } from "../config/db.js";
import { uploadToS3 } from "./s3.service.js";

export const getCompanyProfile = async (companyId) => {
  const db = await getDB();
  const [[row]] = await db.query(
    `SELECT company_name, company_logo_url, subscription_status
     FROM companies
     WHERE id = ?`,
    [companyId]
  );
  return row;
};

export const updateCompanyLogo = async (companyId, file) => {
  const logoUrl = await uploadToS3(
    file.buffer,
    file.originalname,
    file.mimetype,
    "company-logos"
  );

  const db = await getDB();
  await db.query(
    `UPDATE companies SET company_logo_url=? WHERE id=?`,
    [logoUrl, companyId]
  );

  return logoUrl;
};
