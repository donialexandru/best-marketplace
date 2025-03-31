import { formatCurrency } from "../utils/currency";
import { getCartTotal, useCart } from "../context/CartContext.jsx";

function Cart() {
  const { cart } = useCart();
  const cartTotal = getCartTotal(cart);

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
      <p>Total: {formatCurrency(cartTotal)}</p>
    </div>
  );
}

export default Cart;
