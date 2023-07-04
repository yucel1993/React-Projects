import React, { useState } from "react";
import Search from "./search";

function App() {
  const [searchText, setSearchText] = useState("");
  const searchProps = { searchText: searchText };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchText);
    setSearchText("");
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Hello React</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={searchText} onChange={handleChange} />
        <button type="submit">Search</button>
        <Search {...searchProps} />
      </form>
    </div>
  );
}

export default App;
