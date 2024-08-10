import { Request, Response } from "express";
import { UserModel } from "../models/user.model";
import bcrypt from "bcrypt";
import { signToken } from "../utils/jwt.util";

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  let user = await UserModel.findOne({ email });

  if (!user)
    return res
      .status(403)
      .json({ error: "Verifique sus credenciales e intentelo nuevamente!" });
  if (!user.active) return res.status(403).json({ error: "User is disabled" });

  if (bcrypt.compareSync(password, user.password!)) {
    let token = await signToken(user.id!);
    res.status(200).json({ user, token });
  } else {
    res
      .status(403)
      .json({ error: "Verifique sus credenciales e intentelo nuevamente!" });
  }
};

export { loginUser };
