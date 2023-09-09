// import { createContext, useContext, useState } from "react";

// export const ShopContext = createContext();

// export const ShopContextProvider = ({ children }) => {
//   const [data, setData] = useState([]);

//   const getProducts = async () => {
//     try {
//       const res = await fetch('https://dummyjson.com/products');
//       const data = await res.json(); // await here to get the JSON data
//       setData(data);
//     } catch (error) {
//       // Handle error
//     }
//   }

//   const values = { data };

//   return (
//     <ShopContext.Provider value={values}>
//       {children}
//     </ShopContext.Provider>
//   );
// };

// const useShopContext = () => {
//   return useContext(ShopContext);
// };

// export default useShopContext;
