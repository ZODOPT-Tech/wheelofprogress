import { getDB } from "../config/db.js";

export const findAdminByEmail = async (email) => {
  const db = await getDB();
  const [[row]] = await db.query(
    `SELECT a.*, c.payment_status, c.is_active
     FROM company_admins a
     JOIN companies c ON a.company_id=c.id
     WHERE a.admin_email=?`,
    [email]
  );
  return row;
};
