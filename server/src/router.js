import { Router } from "express";

const router = Router();

router.get("/products", (req, res) => {
  res.json({ message: "Your user api works" });
});

export default router;
