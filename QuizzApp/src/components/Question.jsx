import data from "../helper/data.js";
import InterviewAccord from "./InterviewAccord.jsx";

function Question() {
    console.log(data)
  return (
    <div className="questionContainer">
        {data.map((question,index) =>{
            return(
                <InterviewAccord key={index} {...question}/>
            )
        })}

    </div>
  )
}

export default Question