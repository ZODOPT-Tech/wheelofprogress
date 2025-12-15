import * as service from "../services/auth.service.js";

export const register = async (req, res) => {
  const id = await service.registerCompany(req.body, req.file);
  res.json({ companyId: id, next: "/auth/subscription" });
};

export const login = async (req, res) => {
  const token = await service.login(req.body);
  res.json({ token });
};
