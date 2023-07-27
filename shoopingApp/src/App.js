import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./pages/shop/Product";
import Carts from "./pages/cart/Carts";
import { ShopContextProvider } from "./context/shop-context";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <ShopContextProvider > <Routes>
        <Route path="/"element={<Product />}/>
        <Route path="/cart" element={<Carts />} />

      </Routes></ShopContextProvider>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
