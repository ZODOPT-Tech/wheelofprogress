import express from "express";
import auth from "../middlewares/auth.middleware.js";
import * as ctrl from "../controllers/visitor.controller.js";

const router = express.Router();

router.post("/primary", auth, ctrl.primary);

export default router;
