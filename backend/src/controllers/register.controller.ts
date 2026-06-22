import type { Request, Response } from "express";
export const RegisterController = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || password) {
      return res
        .status(400)
        .json({ message: "Missign credentials", action: "failure" });
    }
    // const userExsits = User.findOne({email})
    if (userExsits) {
      return res
        .status(400)
        .json({ message: "user has already registered", action: "failure" });
    }
    const hashedPass = bcrypt.hash(password, 10);
    if (!hashedPass) {
      return res.status(404).json({
        message: "somthing went wrong while hashing credentials",
        action: "failure",
      });
    }
    const createUser = User.create({
      username,
      email,
      password: hashedPass,
    });
    //jwt implementation create a cookies with a token
    return res.status(200).json({ message: "successfully resgistered a user" });
  } catch (error) {
    return res.status(500).json({
      message: "somthing went wrong please try again",
      action: "failure",
    });
  }
};
