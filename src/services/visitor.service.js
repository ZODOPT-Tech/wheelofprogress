import { createVisit } from "../repositories/visitor.repo.js";

export const createPrimary = async (companyId, body) => {
  return await createVisit(companyId, body);
};
