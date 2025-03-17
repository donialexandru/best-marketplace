import prisma from "../modules/db.js";

export const getBooks = async (req, res, next) => {
  try {
    const books = await prisma.book.findMany();
    res.status(200);
    res.json({ succes: true, data: books });
  } catch (e) {
    next(e);
  }
};
