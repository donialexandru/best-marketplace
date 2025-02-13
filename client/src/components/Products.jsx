import "./Products.css";
import wellMet from "../assets/well_met.png";

const intl = new Intl.NumberFormat("ro-RO", {
  style: "currency",
  currency: "RON",
});

let price;

price = intl.format(3.75);

const Products = () => {
  return (
    <div className="products">
      <div className="product">
        <div className="image">
          <img src={wellMet} alt="well met book image" />
          <svg
            className="heart-icon"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.463 3.99401C16.781 2.34901 14.44 3.01201 13.034 4.06801C12.458 4.50101 12.17 4.71801 12 4.71801C11.83 4.71801 11.542 4.50101 10.966 4.06801C9.56001 3.01201 7.21901 2.34901 4.53701 3.99401C1.01801 6.15301 0.222012 13.274 8.34001 19.284C9.88601 20.427 10.659 21 12 21C13.341 21 14.114 20.428 15.66 19.283C23.778 13.275 22.982 6.15301 19.463 3.99401Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            className="cart-icon"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.71 5.4H18.924C20.302 5.4 21.297 6.67 20.919 7.948L19.265 13.548C19.01 14.408 18.196 15 17.27 15H8.112C7.185 15 6.37 14.407 6.116 13.548L3.71 5.4ZM3.71 5.4L3 3M16.5 21C16.8978 21 17.2794 20.842 17.5607 20.5607C17.842 20.2794 18 19.8978 18 19.5C18 19.1022 17.842 18.7206 17.5607 18.4393C17.2794 18.158 16.8978 18 16.5 18C16.1022 18 15.7206 18.158 15.4393 18.4393C15.158 18.7206 15 19.1022 15 19.5C15 19.8978 15.158 20.2794 15.4393 20.5607C15.7206 20.842 16.1022 21 16.5 21ZM8.5 21C8.89782 21 9.27936 20.842 9.56066 20.5607C9.84196 20.2794 10 19.8978 10 19.5C10 19.1022 9.84196 18.7206 9.56066 18.4393C9.27936 18.158 8.89782 18 8.5 18C8.10218 18 7.72064 18.158 7.43934 18.4393C7.15804 18.7206 7 19.1022 7 19.5C7 19.8978 7.15804 20.2794 7.43934 20.5607C7.72064 20.842 8.10218 21 8.5 21Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p>Title: {}</p>
        <p className="secondary-text">Author: {}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Products;
