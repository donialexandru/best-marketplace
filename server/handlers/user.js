import prisma from "../src/db";
import { comparePasswords, createJWT, hashPassword } from "../src/modules/auth";

export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      emai: req.body.email,
      password: await hashPassword(req.body.password),
    },
  });
  const token = createJWT(user);
  res.json({ token });
};

export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });
  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: "Your password didn't match" });
    return;
  }
  const token = createJWT(user);
  res.json({ token });
};
