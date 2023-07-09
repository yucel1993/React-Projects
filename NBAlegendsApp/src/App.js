import { useState } from "react";
import "./style.scss";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [filteredValue, setFilteredValue] = useState("");

  const handleSearch = (value) => {
    setFilteredValue(value);
  };

  return (
    <div className="App text-center">
      <Header onSearch={handleSearch} />
      <Main filteredValue={filteredValue} />
    </div>
  );
}

export default App;
