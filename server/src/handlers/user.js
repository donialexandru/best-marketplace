import prisma from "../modules/db.js";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth.js";

export const registerUser = async (req, res, next) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: await hashPassword(req.body.password),
      },
    });
    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    e.type = "input";
    next(e);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    const isValid = await comparePasswords(req.body.password, user.password);

    if (!isValid) {
      res.status(401);
      res.json({ message: "Your password didn't match" });
      return;
    }
    const token = createJWT(user);
    res.json({ token, message: "Loged In" });
  } catch (e) {
    e.type = "input";
    next(e);
  }
};
