import { useContext } from "react";
import { CartContext } from "../contexts";

export function useCart() {
  const [cart, setCart] = useContext(CartContext);

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const current = cart[i];
    total += Number(current.price);
  }
  return { cart, total, setCart };
}
