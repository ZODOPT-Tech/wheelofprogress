import * as service from "../services/visitor.service.js";

export const primary = async (req, res) => {
  const visitId = await service.createPrimary(
    req.user.companyId,
    req.body
  );
  res.json({ visitId });
};
