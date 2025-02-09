import { Router } from "express";
import { register, signin } from "./handlers/user.js";

const router = Router();

router.get("/products", (req, res) => {
  res.json({ message: "Your products api works" });
});

router.post("/register", register);
router.post("/signin", signin);

export default router;
