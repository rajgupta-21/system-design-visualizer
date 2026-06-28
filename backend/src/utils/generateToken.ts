import jwt from "jsonwebtoken";

interface TokenPayload {
  id: string;
}

export const generateToken = (payload: TokenPayload) => {
  const secretKey = process.env.JWT_SECRET;

  if (!secretKey) {
    throw new Error("JWT_SECRET is not defined");
  }

  return jwt.sign(payload, secretKey, {
    expiresIn: "7d",
  });
};
