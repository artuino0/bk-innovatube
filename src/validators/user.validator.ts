import Joi from "joi";

export const userValidator = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "El nombre es obligatorio",
  }),
  lastname: Joi.string().required().messages({
    "string.empty": "El apellido es obligatorio",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "El correo electrónico es obligatorio",
    "string.email": "Debe ser un correo electrónico válido",
  }),
  username: Joi.string().required().messages({
    "string.empty": "El nombre de usuario es obligatorio",
  }),
  password: Joi.string().min(8).required().messages({
    "string.empty": "La contraseña es obligatoria",
    "string.min": "La contraseña debe tener al menos 8 caracteres",
  }),
});
