import { successResponse } from "../utils/response.js";

export const getConferences = (req, res) => {
  successResponse(res, [
    { id: 1, title: "Tech Conference" },
    { id: 2, title: "Business Meet" }
  ]);
};
