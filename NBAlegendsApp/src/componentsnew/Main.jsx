import { useState } from "react";
import PlayerCard from "./PlayerCard";
import {data} from "../assets/data";
import "./sass/CardContainer.scss";

function Main() {
  const [target, setTarget] = useState("");

  const handleChange = (e) => {
    setTarget(e.target.value);
  };

  return (
    <div className="container mb-4">
      <div>
        <input
          type="text"
          className="form-control search"
          placeholder="Search Player"
          onChange={handleChange}
        />
      </div>
      <div className="players">
        {data
          .filter((item) => item.name.toLowerCase().includes(target.trim().toLowerCase()))
          .map((player, i) => <PlayerCard key={i} {...player} />)}
      </div>
    </div>
  );
}

export default Main;
