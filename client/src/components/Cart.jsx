import { useContext, useState } from "react";
import { formatCurrency } from "../utils/currency";
import { CartContext } from "../contexts";

function Cart() {
  const [loading, setLoading] = useState(true);
  const [cart] = useContext(CartContext);

  async function checkout() {
    setLoading(true);

    await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });

    setCart([]);
    setLoading(false);
  }

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const current = cart[i];
    total += Number(current.price);
  }
  return (
    <div className="cart">
      <p>Cart</p>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span> - <span>{item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total: {formatCurrency(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

export default Cart;
