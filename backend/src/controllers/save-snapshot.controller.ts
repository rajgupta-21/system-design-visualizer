import type { Request, Response } from "express";
import prisma from "../services/prisma.service";

export const saveSnapshot = async (req: Request, res: Response) => {
  try {
    const { image, designId } = req.body;

    const userId = req.user?.id;

    if (!image || !designId || !userId) {
      return res.status(400).json({
        message: "missing fields",
        action: "failure",
      });
    }

    const design = await prisma.design.findFirst({
      where: {
        id: designId,
        ownerId: userId,
      },
    });

    if (!design) {
      return res.status(404).json({
        message: "design not found",
        action: "failure",
      });
    }

    const updatedDesign = await prisma.design.update({
      where: {
        id: designId,
      },

      data: {
        previewImage: image,
      },
    });

    return res.status(200).json({
      message: "snapshot saved",

      design: updatedDesign,

      action: "success",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "something went wrong",

      action: "failure",
    });
  }
};
