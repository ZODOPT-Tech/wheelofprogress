import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import companyRoutes from "./routes/company.routes.js";
import visitorRoutes from "./routes/visitor.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import paymentRoutes from "./routes/payment.routes.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// health check
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    service: "ARSCCOM Backend",
    time: new Date().toISOString()
  });
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/visitor", visitorRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/payment", paymentRoutes);

export default app;   // ✅ THIS LINE IS CRITICAL


