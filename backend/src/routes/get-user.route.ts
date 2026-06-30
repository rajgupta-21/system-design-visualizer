import { Router } from "express";
import { GetUser } from "../controllers/get-user.controller";
import { authMiddleware } from "../middlewares/decodeToken";
const router = Router();
router.get("/user", authMiddleware, GetUser);
export default router;
