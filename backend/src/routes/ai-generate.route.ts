import { Router } from "express";
import { AIGenerate } from "../controllers/ai-visualizer.controller";

const router = Router();

router.post("/generate", AIGenerate);

export default router;
