import bcrypt from "bcrypt";
import * as adminRepo from "../repositories/admin.repo.js";

export const login = async (email, password) => {
  const admin = await adminRepo.findByEmail(email);

  if (!admin) {
    throw new Error("User not found");
  }

  const isValid = await bcrypt.compare(password, admin.password_hash);
  if (!isValid) {
    throw new Error("Invalid credentials");
  }

  return {
    message: "Login successful",
    adminId: admin.id,
    companyId: admin.company_id,
  };
};

