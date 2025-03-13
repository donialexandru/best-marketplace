import Loading from "./common/Loading.jsx";
import { useEffect, useState } from "react";
import Pagination from "./Pagination.jsx";

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

export default Products;
