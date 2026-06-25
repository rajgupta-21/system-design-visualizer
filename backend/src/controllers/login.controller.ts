import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import prisma from "../services/prisma.service";
import { generateToken } from "../utils/generateToken";

export const LoginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Missing credentials",
        action: "failure",
      });
    }
    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (!userExists) {
      return res.status(400).json({
        message: "User dosent exits please register first",
        action: "failure",
      });
    }

    const decrypt = await bcrypt.compare(password, userExists.password);
    if (!decrypt) {
      return res
        .status(404)
        .json({ message: "worng credentials", action: "failure" });
    }

    const token = generateToken(userExists);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // TODO sendEmail
    // await sendEmail({
    //   to: createUser.email,
    //   subject: "Verify your email",
    //   html: verificationEmailTemplate(verifyUrl),
    // });

    return res.status(201).json({
      message: "User Logged successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      action: "failure",
    });
  }
};
