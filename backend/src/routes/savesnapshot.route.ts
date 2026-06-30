import { Router } from "express";
import { saveSnapshot } from "../controllers/save-snapshot.controller";
import { authMiddleware } from "../middlewares/decodeToken";
const router = Router();
router.post("/snapshot", authMiddleware, saveSnapshot);
export default router;
