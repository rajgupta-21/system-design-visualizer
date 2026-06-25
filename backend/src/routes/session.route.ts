import { Router } from "express";

const router = Router();

router.get("/me", (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "No session, please login first",
        action: "failure",
      });
    }

    return res.status(200).json({
      message: "User is in session",
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
