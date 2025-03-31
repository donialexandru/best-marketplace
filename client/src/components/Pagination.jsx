import Product from "./Product.jsx";
import { usePagination } from "../hooks/usePagination.jsx";

function Pagination({ data, itemsPerPage }) {
  const {
    currentPage,
    totalPages,
    currentItems,
    goToNextPage,
    goToPrevPage,
    goToPage,
  } = usePagination(data, itemsPerPage);

  return (
    <>
      <div className="pagination">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <div className="products">
        {currentItems.map((item) => (
          <Product
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            author={item.author}
          />
        ))}
      </div>
    </>
  );
}

export default Pagination;
