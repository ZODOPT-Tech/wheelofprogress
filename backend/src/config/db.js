import mysql from "mysql2/promise";
import { getDbSecret } from "./aws.js";

let pool;

async function initDB() {
  if (pool) return pool;

  const secret = await getDbSecret();

  pool = mysql.createPool({
    host: secret.DB_HOST,
    user: secret.DB_USER,
    password: secret.DB_PASSWORD,
    database: secret.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
  });

  return pool;
}

export default {
  execute: async (...args) => {
    const db = await initDB();
    return db.execute(...args);
  },
};



