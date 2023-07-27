import useShopContext from "../../context/shop-context";
import "./CartItem.scss";

function CartItem({ data }) {
  const { id, productName, price, productImage } = data;
  const { addCart, cartItems, deleteCart, updateItem } = useShopContext();

  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => deleteCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateItem(Number(e.target.value), id)}
            type="text"
          />
          <button onClick={() => addCart(id)}>+</button>
        </div>
      </div>
      
    </div>
  );
}

export default CartItem;
