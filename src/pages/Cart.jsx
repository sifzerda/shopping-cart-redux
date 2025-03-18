import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map((item, index) => (
        <div key={`${item.id}-${index}`} className="border p-2 flex justify-between">
          <span>{item.name} - ${item.price}</span>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
