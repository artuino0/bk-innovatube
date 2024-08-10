import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/user.model";
import { userValidator } from "../validators/user.validator";

export const validateUniqueUsername = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.body;
  const user = await UserModel.findOne({ username })
    .then((rs) => {
      if (rs)
        return res
          .status(403)
          .json({
            error: "El nombre de usuario registrado ya ha sido registrado",
          });
      next();
    })
    .catch((e) => {
      res.status(403).json(e);
    });
};

export const validateUniqueEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  const user = await UserModel.findOne({ email })
    .then((rs) => {
      if (rs)
        return res
          .status(403)
          .json({
            error: "El correo electrónico registrado ya ha sido registrado",
          });
      next();
    })
    .catch((e) => {
      res.status(403).json(e);
    });
};

export const validateForm = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = userValidator.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  next();
};
