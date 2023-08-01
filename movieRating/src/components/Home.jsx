import { useState } from "react";
import MovieInfo from "./MovieInfo";
import MovieYear from "./MovieYear";
import { data } from "../helper/data";

const Home = () => {
    const [info, setInfo] = useState("2022");
    return (
      <div>
        <div className=" my_card m-auto mt-5 ">
          <div className="main p-3">
            <div className="movie-year">
              <MovieYear data={data} setInfo={setInfo} />
            </div>
            <div className="movie-info">
              <MovieInfo data={data} info={info} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Home
  