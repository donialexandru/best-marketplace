import { useCart } from "../context/CartContext.jsx";

export const withCart = (WrappedComponent) => {
  return function WithCartComponent(props) {
    const { cart, setCart } = useCart();

    const addToCart = (product) => {
      setCart([...cart, { name: product.title, price: product.price }]);
    };
    return <WrappedComponent {...props} addToCart={addToCart} />;
  };
};
