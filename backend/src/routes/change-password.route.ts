import { Router } from "express";
import { ChangePassword } from "../controllers/change-password.controller";
import { authMiddleware } from "../middlewares/decodeToken";
const router = Router();

router.post("/update-pass", authMiddleware, ChangePassword);
export default router;
