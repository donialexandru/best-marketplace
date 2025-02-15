import prisma from "../db.js";

export const getBooks = async (req, res) => {
  try {
    const books = await prisma.book.findMany();
    res.status(200);
    res.json({ succes: true, data: books });
  } catch (error) {
    console.error("Error retrieving books", error);
    res.status(500);
    res.json({ message: "Failed to retrieve books" });
  }
};
