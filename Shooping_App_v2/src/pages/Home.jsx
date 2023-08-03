import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

import Navbar from "../components/Navbar";
import Cart from "../components/Cart";


function Home() {
 

  return (
    <>
      <Navbar />
      <Header  />
      <Routes>
        <Route
          path="/productcard/:category"
          element={<ProductCard  />}
        />
        <Route path="/cart" element={<Cart /> }/>
        
      </Routes>
    </>
  );
}

export default Home;
