import express from "express";
import auth from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js";
import * as controller from "../controllers/company.controller.js";

const router = express.Router();

router.get("/profile", auth, controller.getProfile);

router.put(
  "/logo",
  auth,
  upload.single("logo"),
  controller.updateLogo
);

export default router;
