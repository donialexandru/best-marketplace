import { useState, useEffect } from "react";
import { fetchProductsData } from "../services/api.js";

export function useProducts() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  // async function fetchBooks() {
  //   try {
  //     setLoading(true);
  //     setError(null);
  //     const response = await fetch("/api/products/books");
  //
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch products");
  //     }
  //     const data = await response.json();
  //     setBooks(data.data);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

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
  return { books, loading, error };
}
