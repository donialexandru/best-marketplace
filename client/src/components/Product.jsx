import FavouriteLogo from "./common/FavouriteLogo.jsx";
import CartLogo from "./common/CartLogo.jsx";
import { formatCurrency } from "../utils/currency";
import { withCart } from "../HOC/withCart.jsx";

function Product(props) {
  const { imageUrl, title, author, price, addToCart } = props;

  return (
    <div className="product">
      <div className="image">
        <img src={imageUrl} alt="random image" />
        <a href="#" className="heart-icon">
          <FavouriteLogo />
        </a>
        <a
          className="cart-icon"
          onClick={(e) => {
            e.preventDefault();
            addToCart({ title, price });
          }}
        >
          <CartLogo />
        </a>
      </div>
      <p>Title: {title}</p>
      <p className="secondary-text">Author: {author}</p>
      <p>{formatCurrency(price)}</p>
    </div>
  );
}

export default withCart(Product);
