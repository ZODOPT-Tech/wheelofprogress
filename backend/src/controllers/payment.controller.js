import { activateCompanyByZohoSub } from "../repositories/company.repo.js";
import { getDB } from "../config/db.js";

export const webhook = async (req, res) => {
  const { subscription_id } = req.body;

  await activateCompanyByZohoSub(subscription_id);

  const db = await getDB();
  await db.query(
    `UPDATE company_admins a
     JOIN companies c ON a.company_id=c.id
     SET a.is_active=TRUE
     WHERE c.zoho_subscription_id=?`,
    [subscription_id]
  );

  res.json({ status: "ok" });
};
