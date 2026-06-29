import type { Request, Response } from "express";
import prisma from "../services/prisma.service";
import { GenerateDesign } from "../utils/GenerateDesign";

export const AIGenerate = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    const userId = req.user.id;

    if (!prompt) {
      return res.status(400).json({
        message: "empty prompt",
        action: "failure",
      });
    }

    const GenerateResponse = await GenerateDesign({
      prompt,
    });

    if (!GenerateResponse) {
      return res.status(400).json({
        message: "AI failed to generate design",
        action: "failure",
      });
    }

    const savedDesign = await prisma.design.create({
      data: {
        title: GenerateResponse.title,
        ownerId: userId,

        nodes: {
          create: GenerateResponse.nodes.map((node: any) => ({
            flowId: node.id,

            type: node.type,

            position: node.position,

            data: node.data,
          })),
        },

        edges: {
          create: GenerateResponse.edges.map((edge: any) => ({
            flowId: edge.id,

            source: edge.source,

            target: edge.target,

            type: edge.type,

            animated: edge.animated ?? false,
          })),
        },
      },

      include: {
        nodes: true,
        edges: true,
      },
    });

    return res.status(200).json({
      message: "Successfully generated architecture design",

      Response: savedDesign,

      action: "success",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "something went wrong while generating design",

      action: "failure",
    });
  }
};
