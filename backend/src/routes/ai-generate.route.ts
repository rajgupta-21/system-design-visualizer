import { Router } from "express";
import { AIGenerate } from "../controllers/ai-visualizer.controller";
import { authMiddleware } from "../middlewares/decodeToken";

const router = Router();

router.post("/generate", authMiddleware, AIGenerate);

export default router;
