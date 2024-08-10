import { Router } from "express";
import { loginUser } from "../controllers/auth.ctrl";
import { createUser } from "../controllers/user.ctrl";

const authRouter = Router();

authRouter.post("/login", loginUser);
authRouter.post("/register", createUser);

export default authRouter;
