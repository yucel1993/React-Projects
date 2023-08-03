

import CartItem from "./CartItem";
import { useCart } from "./context/CartContext";


function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <p>Total Items: {cartItemCount}</p>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQuantity={() => increaseQuantity(item.id)}
              decreaseQuantity={() => decreaseQuantity(item.id)}
            />
          ))}
          <div className="d-flex justify-content-end">
            <h5>Total Cost: ${totalCost}</h5>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
