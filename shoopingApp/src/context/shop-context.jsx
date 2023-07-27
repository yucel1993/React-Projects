import { createContext, useContext, useState } from "react";
import { PRODUCTS } from "../item";

export const ShopContext = createContext();

const defaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};


export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(defaultCart());


  





  const addCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const deleteCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };
  const updateItem = (newAmount, id) => {
    setCartItems((prev) => ({ ...prev, [id]: newAmount }));
  };



  const getTotal = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount; // Don't forget to return the total amount.
  };
  

  const values = { cartItems, addCart, deleteCart, updateItem,getTotal };

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};

const useShopContext = () => {
  return useContext(ShopContext);
};

export default useShopContext;
