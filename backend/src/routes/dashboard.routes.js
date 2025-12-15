import express from "express";
import auth from "../middlewares/auth.middleware.js";
import * as ctrl from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get("/stats", auth, ctrl.stats);

export default router;
