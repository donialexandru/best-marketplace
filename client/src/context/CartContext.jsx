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

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const current = cart[i];
    total += Number(current.price);
  }
  return { cart, total, setCart };
};
