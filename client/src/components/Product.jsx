import FavouriteLogo from "./common/FavouriteLogo.jsx";
import CartLogo from "./common/CartLogo.jsx";
import { useContext, useState } from "react";
import { formatCurrency } from "../utils/currency";
import { CartContext } from "../contexts";

export default function Product(props) {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div className="product">
      <div className="image">
        <img src={props.imageUrl} alt="random image" />
        <a href="#" className="heart-icon">
          <FavouriteLogo />
        </a>
        <a
          className="cart-icon"
          onClick={(e) => {
            e.preventDefault();
            setCart([...cart, { name: props.title, price: props.price }]);
          }}
        >
          <CartLogo />
        </a>
      </div>
      <p>Title: {props.title}</p>
      <p className="secondary-text">Author: {props.author}</p>
      <p>{formatCurrency(props.price)}</p>
    </div>
  );
}
