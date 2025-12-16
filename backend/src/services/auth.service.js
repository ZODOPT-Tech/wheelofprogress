import adminRepo from "../repositories/admin.repo.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

export async function login(email, password) {
  const admin = await adminRepo.findByEmail(email);

  if (!admin) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    { id: admin.id, role: "ADMIN" },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  return {
    token,
    admin: {
      id: admin.id,
      email: admin.email,
      company_id: admin.company_id,
    },
  };
}
