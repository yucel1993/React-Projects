import { useState } from "react";
import "./sass/PlayerCard.scss";

function PlayerCard({ img, name, statistics }) {
  const [picture, setPicture] = useState(true);
  const handleClick = () => {
    setPicture(!picture);
  };
  return (

    <div onClick={handleClick} className="test">

        {
            picture? (
                <div className="cardsTop m-auto text-center">
                    <div>
        
                        <img className="card-img" src={img} alt={name} />
        
                    </div>
                </div>
            ):(<ul className="m-auto statisticsTop">
                {statistics.map((item,i) =>{
                    return(

                        <div className="statistics">
                            <li key={i}>
                            🏀 {item}
                            </li>
                        </div>
                        
                    )
                })}
            </ul>)
        }
        <div className="cardDetail text-center">
            <h5>{name}</h5>
        </div>

    </div>
  )
}
export default PlayerCard;