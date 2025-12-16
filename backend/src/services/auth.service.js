import * as adminRepo from "../repositories/admin.repo.js";

export const login = async (email, password) => {
  const admin = await adminRepo.findByEmail(email);

  if (!admin) {
    throw new Error("User not found");
  }

  return admin;
};



