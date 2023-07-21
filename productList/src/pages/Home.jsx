import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useState } from "react";


function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Header setSelectedCategory={setSelectedCategory} />
      <Routes>
        <Route
          path="/productcard/:category"
          element={<ProductCard selectedCategory={selectedCategory} />}
        />
      </Routes>
    </>
  );
}

export default Home;
