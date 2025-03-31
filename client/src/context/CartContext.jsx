import { createContext, useContext, useState } from "react";

const CartContext = createContext([[], function () {}]);

export const CartProvider = ({ children }) => {
  const cartHook = useState([]);

  return (
    <CartContext.Provider value={cartHook}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const [cart, setCart] = useContext(CartContext);

  return { cart, setCart };
};

export const getCartTotal = (cart) => {
  return cart.reduce((sum, item) => (sum * 100 + item.price * 100) / 100, 0);
};
