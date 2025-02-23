import "./Products.css";
import Loading from "./Loading.jsx";
import { useEffect, useState, useContext } from "react";
import Cart from "./Cart.jsx";
import Product from "./Product.jsx";
import { CartContext } from "../contexts.jsx";

const Products = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart] = useContext(CartContext);
  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const booksRes = await fetch("/api/products/books");
    const booksJson = await booksRes.json();
    setBooks(booksJson.data);
    setLoading(false);
  }

  return loading ? (
    <Loading />
  ) : (
    <div className="products">
      {books.map((book) => (
        <Product
          key={book.id}
          imageUrl={book.imageUrl}
          title={book.title}
          price={book.price}
          author={book.author}
        />
      ))}
      <Cart cart={cart} />
    </div>
  );
};

export default Products;
