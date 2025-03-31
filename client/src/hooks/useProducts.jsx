import { useState, useEffect } from "react";
import { fetchProductsData } from "../services/api.js";

export function useProducts() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchBooks() {
    try {
      setLoading(true);
      setError(null);
      const books = await fetchProductsData();
      setBooks(books.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);
  return { books, loading, error };
}
