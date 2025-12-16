import db from "../config/db.js";

const adminRepo = {
  async findByEmail(email) {
    const [rows] = await db.execute(
      "SELECT * FROM admins WHERE email = ? LIMIT 1",
      [email]
    );
    return rows[0];
  },
};

export default adminRepo;



