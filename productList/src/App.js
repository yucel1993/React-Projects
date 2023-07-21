import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App container text-center">
      <BrowserRouter>
      <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
