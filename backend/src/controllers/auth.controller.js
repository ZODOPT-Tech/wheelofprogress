import * as authService from "../services/auth.service.js";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const result = await authService.login(email, password);

    // 🔴 THIS LINE IS MANDATORY
    return res.status(200).json(result);

  } catch (err) {
    return res.status(400).json({
      message: err.message || "Login failed",
    });
  }
};

