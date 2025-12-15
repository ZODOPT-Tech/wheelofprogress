import { getDB } from "../config/db.js";

export const stats = async (req, res) => {
  const db = await getDB();

  const [[row]] = await db.query(
    `SELECT
       COUNT(*) AS total,
       COUNT(CASE WHEN DATE(check_in)=CURDATE() THEN 1 END) AS today
     FROM visitor_visits
     WHERE company_id = ?`,
    [req.user.companyId]
  );

  res.json(row);
};
