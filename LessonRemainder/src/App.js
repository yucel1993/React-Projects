import Header from "./Components/Header";
import Main from "./Components/Main";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"



function App() {
  return (
    <div className="App container">
    <Header />
    <div className="Main shadow p-3 text-light">
      <Main />
    </div>
  </div>
  
  );
}

export default App;
