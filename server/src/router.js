import { Router } from "express";
import { registerUser, signinUser } from "./handlers/user.js";
import { getBooks } from "./handlers/getBooks.js";
import {
  registerUserValidation,
  signinUserValidation,
} from "./validators/userValidator.js";
import { validate } from "./validators/validate.js";

const router = Router();

router.post("/register", registerUserValidation(), validate, registerUser);
router.post("/signin", signinUserValidation(), validate, signinUser);

router.get("/products/books", getBooks);

router.use((err, req, res, next) => {
  if (err.type === "auth") {
    res.status(401).json({ message: "unauthorized" });
  } else if (err.type === "input") {
    res.status(400).json({ message: "invalid input" });
  } else {
    res.status(500).json({ message: "oops, that's on us" });
  }
});
export default router;
