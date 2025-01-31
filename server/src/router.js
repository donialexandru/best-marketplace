import { Router } from "express";

const router = Router();

router.get("/api", (req, res) => {
  res.json({ message: "Your user api works" });
});

export default router;
