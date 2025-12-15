import express from "express";
import * as ctrl from "../controllers/auth.controller.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/register", upload.single("logo"), ctrl.register);
router.post("/login", ctrl.login);

export default router;
