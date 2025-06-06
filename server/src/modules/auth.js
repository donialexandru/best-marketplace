import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "./db.js";
// when you log in
export const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash);
};

// when sign in
export const hashPassword = (password) => {
  return bcrypt.hash(password, 5);
};

export const createJWT = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );
  return token;
};

export const protect = (req, res, next) => {
  // const bearer = req.headers.authorization;
  const token = req.cookies?.token;

  if (!token) {
    res.status(401);
    res.json({ message: "Authentication required" });
    return;
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
      }
      req.user = decoded;
      next();
    });
  } catch (e) {
    next(e);
  }
};

export const findUserById = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

export const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(400).json({ message: "Invalid or expired toke" });
    }
    req.user = decoded;

    next();
  });
};
