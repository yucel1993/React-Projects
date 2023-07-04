import {data} from "./data";
import logo from "./logo.png";
import "./sass/main.scss";
import Header from"./components/Header";
import Card from"./components/Card";

function App() {
 
  return (
    <div className="App">
    <Header logo={logo} />
    
    <h1 className="mainTag">WHO ARE YOU ?</h1>
    <Card data={data} />
    </div>
  );
}

export default App;
