import { Router } from "express";
import {
  getUser,
  getUsers,
  createUser,
  updateUser,
  disableUser,
} from "../controllers/user.ctrl";
import validateJWT from "../middlewares/jwt.middleware";

const userRouter = Router();

userRouter.get("/list", validateJWT, getUsers);
userRouter.get("/retrieve/:id", validateJWT, getUser);
userRouter.post("/create", createUser);
userRouter.put("/update/:id", validateJWT, updateUser);
userRouter.delete("/delete/:id", validateJWT, disableUser);

export default userRouter;
