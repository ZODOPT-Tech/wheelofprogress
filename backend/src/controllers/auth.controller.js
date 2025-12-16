import * as authService from "../services/auth.service.js";

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const data = await authService.login(email, password);
    res.json(data);
  } catch (err) {
    next(err);
  }
}


