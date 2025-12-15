import { verifyToken } from "../utils/jwt.js";

export default function auth(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const user = verifyToken(token);

    if (!user.companyActive) {
      return res.status(403).json({ message: "Subscription inactive" });
    }

    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: "Unauthorized" });
  }
}
