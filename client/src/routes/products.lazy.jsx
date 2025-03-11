import "../components/Products.css";
import Loading from "../components/Loading.jsx";
import { useEffect, useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import Product from "../components/Product.jsx";
import Pagination from "../components/Pagination.jsx";

export const Route = createLazyFileRoute("/products")({
  component: Products,
});

function Products() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const booksRes = await fetch("/api/products/books");
    const booksJson = await booksRes.json();
    setBooks(booksJson.data);
    setLoading(false);
  }

  return loading ? <Loading /> : <Pagination data={books} itemsPerPage={5} />;
}
