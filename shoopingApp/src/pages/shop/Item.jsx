import useShopContext from "../../context/shop-context";

function Item({ data }) {
  const { id, productName, price, productImage } = data;
       const {addCart,cartItems,deleteCart}     =useShopContext()
      let amount=cartItems[id]
  
       return (
    <div key={id} className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price}</p>
      </div>
      <button className="addToCartBttn" onClick={()=>addCart(id)}>Add to Cart {amount >0  && <>({amount})</>} 
      </button>
    </div>
  );
}

export default Item;
