import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

export const signToken = (payload) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });

export const verifyToken = (token) =>
  jwt.verify(token, JWT_SECRET);
