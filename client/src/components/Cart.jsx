import { formatCurrency } from "../utils/currency";
import { useCart } from "./useCart";

function Cart() {
  const { cart, total } = useCart();

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
    </div>
  );
}

export default Cart;
