import express from "express";
import * as ctrl from "../controllers/payment.controller.js";

const router = express.Router();
router.post("/webhook", ctrl.webhook);
export default router;
