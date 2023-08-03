import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./app.scss";


import { CartProvider } from "./components/context/CartContext";


function App() {
  return (
    <div className="App container text-center">
      <BrowserRouter>
        <CartProvider>
          
          <Home />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
