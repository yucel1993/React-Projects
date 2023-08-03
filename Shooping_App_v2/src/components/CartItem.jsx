import React from "react";
import { useCart } from "./context/CartContext";

function CartItem({ item, increaseQuantity, decreaseQuantity }) {
  
  const { removeFromCart } = useCart();
  return (
    <div className="cart-item">
      <div className="item-details">
        <div className="item-image">
          <img width="25%" src={item.image} alt={item.title} />
        </div>
        <div className="item-info">
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <div className="quantity-controls">
            <button className="quantity-button" onClick={decreaseQuantity}>-</button>
            <h2 className="item-quantity">{item.quantity}</h2>
            <button className="quantity-button" onClick={increaseQuantity}>+</button>
          </div>
          <div>
            <button onClick={()=>removeFromCart(item.id)} className="btn btn-danger">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
