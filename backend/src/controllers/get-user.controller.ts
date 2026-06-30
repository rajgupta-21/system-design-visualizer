import type { Request, Response } from "express";
import prisma from "../services/prisma.service";

export const GetUser = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).json({
        message: "missing credentials please login ",
        action: "failure",
      });
    }
    const user = await prisma.user.findFirst({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(400).json({
        message: "no user found please make sure user is registered",
        action: "failure",
      });
    }
    return res
      .status(200)
      .json({ message: "user found", user, action: "success" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "internal server error", action: "failure" });
  }
};
