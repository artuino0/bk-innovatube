import jwt from "jsonwebtoken";

interface Payload {
  uid: string;
}

export const signToken = (uid: string) => {
  return new Promise((resolve, reject) => {
    const payload = { uid };
    jwt.sign(
      payload,
      process.env.SECRET_KEY || "",
      {
        expiresIn: "1h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el JWT");
        } else {
          resolve(token);
        }
      }
    );
  });
};

export const verifyToken = (token: string): Promise<Payload> => {
  let SECRET_KEY = process.env.SECRET_KEY || "";

  return new Promise((res, rej) => {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        rej(err);
      } else {
        res(decoded as Payload);
      }
    });
  });
};
