import { getDB } from "../config/db.js";

export const findByEmail = async (email) => {
  const db = await getDB();

  const [rows] = await db.query(
    "SELECT * FROM company_admins WHERE email = ? LIMIT 1",
    [email]
  );

  return rows.length ? rows[0] : null;
};


