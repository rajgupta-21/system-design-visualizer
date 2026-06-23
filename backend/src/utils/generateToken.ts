import jwt from "jsonwebtoken";

export const generateToken = (payload: object) => {
  const secretKey = process.env.JWT_SECRET;

  if (!secretKey) {
    throw new Error("JWT_SECRET is not defined");
  }

  const token = jwt.sign(payload, secretKey, {
    expiresIn: "7d",
  });

  return token;
};
