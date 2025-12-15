import mysql from "mysql2/promise";
import { getSecrets } from "./aws.js";

let pool;

export const getDB = async () => {
  if (!pool) {
    const s = await getSecrets();

    pool = mysql.createPool({
      host: s.DB_HOST,
      user: s.DB_USER,
      password: s.DB_PASSWORD,
      database: "ARSCCOM",
      waitForConnections: true,
      connectionLimit: 10
    });
  }
  return pool;
};
