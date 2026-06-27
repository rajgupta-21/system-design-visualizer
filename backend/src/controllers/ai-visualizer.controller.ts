import type { Request, Response } from "express";
import { GenerateDesign } from "../utils/GenerateDesign";

export const AIGenerate = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res
        .status(404)
        .json({ message: "empty prompt", action: "failure" });
    }
    const GenerateResponse = await GenerateDesign({ prompt });

    if (!GenerateResponse) {
      return res.status(400).json({
        message: "something went wrong while generating a design ",
        action: "failure",
      });
    }
    return res.status(200).json({
      message: "Successfully generate architecture desing",
      Response: GenerateResponse,
      action: "success",
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again while generating design",
      action: "failure",
    });
  }
};
