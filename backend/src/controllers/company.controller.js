import * as service from "../services/company.service.js";

export const getProfile = async (req, res) => {
  const data = await service.getCompanyProfile(req.user.companyId);
  res.json(data);
};

export const updateLogo = async (req, res) => {
  const logoUrl = await service.updateCompanyLogo(
    req.user.companyId,
    req.file
  );
  res.json({ logoUrl });
};
