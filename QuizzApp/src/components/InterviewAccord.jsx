import { useState } from "react";
import { arrowdown } from "../helper/icon";
import { arrowup } from "../helper/icon";


function InterviewAccord({ id, question, answer }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [arrow, setArrow] = useState(arrowdown);

  const handleClick = () => {
    setIsAnswerVisible(!isAnswerVisible);
    setArrow(isAnswerVisible ? arrowdown : arrowup);
  };

  return (
    <div className="box">
      <p>
        <span className="mutual">{id}.</span>
        <span className="mutual">{question}</span>
        <span onClick={handleClick} className="mutual arrow">
          {arrow}
        </span>
      </p>
      <div className={`answer ${isAnswerVisible ? "visible" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default InterviewAccord;
