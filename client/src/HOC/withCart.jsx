import { useContext } from "react";
import { CartContext } from "../contexts";
import { useCart } from "../hooks/useCart";

export const withCart = (WrappedComponent) => {
  return function WithCartComponent(props) {
    const { cart, setCart } = useCart();

    const addToCart = (product) => {
      setCart([...cart, { name: product.title, price: product.price }]);
    };
    return <WrappedComponent {...props} addToCart={addToCart} />;
  };
};
