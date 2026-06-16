import { Router } from "express";
import { AuthController } from "./auth.controller.js";
import { registerSchema, loginSchema } from "./auth.validation.js";

import { authMiddleware } from "../../middleware/auth/auth.middleware.js";
import { validateMiddleware } from "../../middleware/validation/validate.middleware.js";

const authRoutes = Router();

const authController = new AuthController();

authRoutes.post(
  "/register",
  validateMiddleware(registerSchema),
  authController.register
);

authRoutes.post(
  "/login",
  validateMiddleware(loginSchema),
  authController.login
);

authRoutes.get(
  "/me",
  authMiddleware,
  authController.me
);

export default authRoutes;