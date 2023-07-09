import { useState } from "react";
import picture from "../assets/nba-logo.png";

function Header({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <>
      <div className="mt-5">
        <img src={picture} alt="" />
      </div>
      <h1 className="fs-1 mt-4 h-1 fw-bold">NBA Legends</h1>
      <input
        type="text"
        className="form-control w-50 mx-auto"
        value={searchValue}
        onChange={handleInputChange}
      />
    </>
  );
}

export default Header;
