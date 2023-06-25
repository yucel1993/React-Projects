

import {data} from "../data";

function MainCard() {
  return (
    <div className="row">
        {data.map((item) => {
        const { id, name, hour, image } = item;
        return (
          <div key={id} className="col col-md-6 col-lg-4 ">
            <div className="w-25">
              <img className="w-100" src={image} alt="" />
            </div>
            <div className="w-25">
              <p className="">Lesson Name:{name}</p>
              <p>Lesson Hour:{hour}</p>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default MainCard