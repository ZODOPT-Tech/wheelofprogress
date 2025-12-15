import { hashPassword, comparePassword } from "../utils/password.js";
import { signToken } from "../utils/jwt.js";
import { uploadToS3 } from "./s3.service.js";
import { getDB } from "../config/db.js";
import { findAdminByEmail } from "../repositories/admin.repo.js";
import { createCompany } from "../repositories/company.repo.js";

export const registerCompany = async (data, logo) => {
  const db = await getDB();
  const pwd = await hashPassword(data.password);

  const logoUrl = await uploadToS3(
    logo.buffer,
    logo.originalname,
    logo.mimetype,
    "company-logos"
  );

  const companyId = await createCompany(data.companyName, logoUrl);

  await db.query(
    `INSERT INTO company_admins
     (company_id, admin_email, admin_phone, password_hash,
      company_url, conference_rooms_count, is_active)
     VALUES (?, ?, ?, ?, ?, ?, FALSE)`,
    [
      companyId,
      data.email,
      data.phone,
      pwd,
      data.companyUrl,
      data.rooms
    ]
  );

  return companyId;
};

export const login = async ({ email, password }) => {
  const user = await findAdminByEmail(email);
  if (!user) throw new Error("Invalid login");

  if (user.payment_status !== "SUCCESS") {
    throw new Error("Payment pending");
  }

  const ok = await comparePassword(password, user.password_hash);
  if (!ok) throw new Error("Invalid login");

  return signToken({
    adminId: user.id,
    companyId: user.company_id,
    companyActive: user.is_active
  });
};
