

import {data} from "../data";

function MainCard() {
  return (
    <div className="row">
      {data.map((item) => {
        const { id, name, hour, image } = item;
        return (
          <div key={id} className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="d-flex align-items-center">
              <div className="w-25">
                <img className="w-100" src={image} alt="" />
              </div>
              <div className="w-75 d-flex justify-content-between">
                <div>
                  <p>Lesson Name: {name}</p>
                  <p>Lesson Hour: {hour}</p>
                </div>
                <div>{/* Add your icon element here */}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}



export default MainCard