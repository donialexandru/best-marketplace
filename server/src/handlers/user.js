import prisma from "../modules/db.js";
import {
  comparePasswords,
  createJWT,
  findUserById,
  hashPassword,
} from "../modules/auth.js";

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
    // res.json({ token });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000,
    });

    res.json({ success: true, user: { id: user.id, email: user.email } });
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
    // res.json({ token, message: "Loged In" });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000,
    });
    res.json({ success: true, user: { id: user.id, email: user.email } });
  } catch (e) {
    e.type = "input";
    next(e);
  }
};

export const logoutUser = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.json({ message: "Logged out successfully" });
  } catch (e) {
    next(e);
  }
};

export const checkUser = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const user = await findUserById(userId);

    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    next(err);
  }
};
