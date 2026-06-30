import { Router, type Request, type Response } from "express";
import { authMiddleware } from "../middlewares/decodeToken";
import prisma from "../services/prisma.service";

const router = Router();

router.get("/designs", authMiddleware, async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
        action: "failure",
      });
    }

    const designs = await prisma.design.findMany({
      where: {
        ownerId: userId,
      },

      orderBy: {
        createdAt: "desc",
      },

      select: {
        id: true,
        title: true,
        createdAt: true,
        nodes: true,
        edges: true,
        previewImage: true,
      },
    });

    if (designs.length === 0) {
      return res.status(200).json({
        message: "No designs found",
        designs: [],
        action: "success",
      });
    }

    return res.status(200).json({
      message: "Designs found",

      designs,

      action: "success",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",

      action: "failure",
    });
  }
});

export default router;
