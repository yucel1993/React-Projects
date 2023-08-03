import { NavLink } from "react-router-dom";
import { useCart } from "./context/CartContext";


function Navbar() {
  const { cartItems } = useCart();
  
  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  

  return (
    <nav>
      <NavLink to="/productcard/All" className="text-danger home">
        Home Page
      </NavLink>
      <NavLink to="/cart" className="cart">
        Cart
        {cartItemCount > 0 && (
          <span className="cart-count">{cartItemCount}</span>
        )}
      </NavLink>
    </nav>
  );
}

export default Navbar;
