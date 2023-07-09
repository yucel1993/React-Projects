import { useState } from "react";
import "./sass/PlayerCard.scss";

function PlayerCard({ img, name, statistics }) {
  const [picture, setPicture] = useState(true);
  const handleClick = () => {
    setPicture(!picture);
  };
  return (
    <div onClick={handleClick}>
      {picture ? (
        <div className="cardsTop m-auto text-center">
        
            <img className="card-img" src={img} alt={name} />
          
        </div>
      ) : (
        <ul className="m-auto statisticsTop">
          {statistics.map((item, i) => {
            return (
              <>
                <li key={i}>🏀 {item}</li>
              </>
            );
          })}
        </ul>
      )}
      <div className="text-center">
        <h5>{name}</h5>
      </div>
    </div>
  );
}
export default PlayerCard;
