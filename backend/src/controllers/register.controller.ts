import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import prisma from "../services/prisma.service";
import { generateToken } from "../utils/generateToken";

export const RegisterController = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Missing credentials",
        action: "failure",
      });
    }

    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return res.status(400).json({
        message: "User already registered",
        action: "failure",
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const createUser = await prisma.user.create({
      data: {
        name: username,
        email,
        password: hashedPass,
      },
    });

    const token = generateToken({
      userId: createUser.id,
      email: createUser.email,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // await sendEmail({
    //   to: createUser.email,
    //   subject: "Verify your email",
    //   html: verificationEmailTemplate(verifyUrl),
    // });

    return res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      action: "failure",
    });
  }
};
