import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import prisma from "../services/prisma.service";

export const ChangePassword = async (req: Request, res: Response) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const userId = req.user?.id;

    if (!userId || !currentPassword || !newPassword) {
      return res.status(400).json({
        message: "Missing credentials",
        action: "failure",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        password: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        action: "failure",
      });
    }

    const passwordMatch = await bcrypt.compare(currentPassword, user.password);

    if (!passwordMatch) {
      return res.status(400).json({
        message: "Current password is incorrect",
        action: "failure",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        password: hashedPassword,
      },
    });

    return res.status(200).json({
      message: "Password updated successfully",
      action: "success",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Something went wrong",
      action: "failure",
    });
  }
};
