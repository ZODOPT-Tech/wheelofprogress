import mysql from "mysql2/promise";
import { getSecret } from "./aws.js";

let pool;

export default async function getDB() {
  if (pool) return pool;

  const secret = await getSecret();

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




