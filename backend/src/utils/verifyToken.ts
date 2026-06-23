import jwt from "jsonwebtoken";

export const verifyToken = (token: string) => {
  try {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("JWT_SECRET is missing");
    }

    const decoded = jwt.verify(token, secret);

    return decoded;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};
