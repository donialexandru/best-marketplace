import { Router } from "express";
import { register, signin } from "./handlers/user.js";
import { getBooks } from "./handlers/getBooks.js";

const router = Router();

router.get("/products/books", getBooks);
router.post("/register", register);
router.post("/signin", signin);

export default router;
