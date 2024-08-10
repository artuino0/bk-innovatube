import { Router } from "express";
import { loginUser } from "../controllers/auth.ctrl";
import { createUser } from "../controllers/user.ctrl";
import {
  validateForm,
  validateUniqueEmail,
  validateUniqueUsername,
} from "../middlewares/user.middleware";

const authRouter = Router();

authRouter.post("/login", loginUser);
authRouter.post(
  "/register",
  [validateForm, validateUniqueEmail, validateUniqueUsername],
  createUser
);

export default authRouter;
