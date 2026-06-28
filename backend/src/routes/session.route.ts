import { Router } from "express";
import { authMiddleware } from "../middlewares/decodeToken";

const router = Router();

router.get("/me", authMiddleware, (req, res) => {
  try {
    return res.status(200).json({
      message: "User is in session",
      user: req.user,
      action: "success",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      action: "failure",
    });
  }
});

export default router;
