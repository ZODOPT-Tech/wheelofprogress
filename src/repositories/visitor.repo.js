import { getDB } from "../config/db.js";

export const createVisit = async (companyId, v) => {
  const db = await getDB();
  const [r] = await db.query(
    `INSERT INTO visitor_visits
     (company_id, visitor_name, visitor_phone, visitor_email)
     VALUES (?, ?, ?, ?)`,
    [companyId, v.name, v.phone, v.email]
  );
  return r.insertId;
};
