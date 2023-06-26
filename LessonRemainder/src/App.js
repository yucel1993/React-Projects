import Header from "./Components/Header";
import Main from "./Components/Main";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"



function App() {
  return (
    <div className="App container">
    <Header />
    <div className="Main">
      <Main />
    </div>
  </div>
  
  );
}

export default App;
