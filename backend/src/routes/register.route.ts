import { Router } from "express";
import { RegisterController } from "../controllers/register.controller";
const router = Router();

router.post("/register", RegisterController);
export default router;
