import type { Request, Response } from "express";

export const AIGenerate = (req: Request, res: Response) => {
  try {
    const Prompt = req.body;
    if (!Prompt) {
      return res
        .status(404)
        .json({ message: "empty prompt", action: "failure" });
    }
    const Generate = GenerateDesign(Prompt);

    if (!Generate) {
      return res.status(400).json({
        message: "something went wrong while generating a design ",
        action: "failure",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
      action: "failure",
    });
  }
};
