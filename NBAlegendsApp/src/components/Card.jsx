import { data } from "../assets/data.js";
import "../style.scss";
import { useState } from "react";

function Card({ filteredValue }) {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (i) => {
    if (activeCard === i) {
      setActiveCard(null);
    } else {
      setActiveCard(i);
    }
  };

  const filteredData = data.filter(({ name }) =>
    name.toLowerCase().includes(filteredValue.toLowerCase())
  );

  return (
    <div className="mt-5 row">
      {filteredData.map(
        ({ name, img, statistics: [points, rebounds, assist, allstar] }, i) => {
          const isCardActive = activeCard === i;

          return (
            <div
              key={i}
              className="col-12 col-md-6 col-lg-4 p-5"
              onClick={() => handleCardClick(i)}
            >
              <div
                className={`card mx-3 ${isCardActive ? "active" : ""}`}
                style={{ width: "18rem", height: "36rem" }}
              >
                {!isCardActive ? (
                  <img src={img} className="card-img-top" alt="..." />
                ) : (
                  <div className="infoDiv">
                    <p className="flipped">🏀points: {points}</p>
                    <p className="flipped">🏀rebounds: {rebounds}</p>
                    <p className="flipped">🏀assist: {assist}</p>
                    <p className="flipped">🏀allstar: {allstar}</p>
                  </div>
                )}

                <div className="card-body">
                  <h4 className="card-text">{name}</h4>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default Card;
