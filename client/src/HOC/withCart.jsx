import { useContext } from "react";
import { CartContext } from "../contexts";

export const withCart = (WrappedComponent) => {
  return function WithCartComponent(props) {
    const [cart, setCart] = useContext(CartContext);

    const addToCart = (product) => {
      setCart([...cart, { name: product.title, price: product.price }]);
    };
    return <WrappedComponent {...props} addToCart={addToCart} />;
  };
};
