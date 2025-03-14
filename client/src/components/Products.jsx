import Loading from "./common/Loading.jsx";
import Pagination from "./Pagination.jsx";
import { useProducts } from "./useProducts.jsx";

function Products() {
  const { books, loading, error } = useProducts();

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return <Pagination data={books} itemsPerPage={5} />;
}

export default Products;
