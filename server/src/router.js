import { Router } from "express";
import {
  checkUser,
  loginUser,
  logoutUser,
  registerUser,
} from "./handlers/user.js";
import { getBooks } from "./handlers/getBooks.js";
import {
  loginUserValidation,
  registerUserValidation,
} from "./validators/userValidator.js";
import { validate } from "./validators/validate.js";
import { authenticateToken, protect } from "./modules/auth.js";

const router = Router();

router.post("/register", registerUserValidation(), validate, registerUser);
router.post("/login", loginUserValidation(), validate, loginUser);
router.post("/logout", logoutUser);

router.get("/me", authenticateToken, checkUser);

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
