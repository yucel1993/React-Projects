import React from "react";

const MovieYear = ({ setInfo, data }) => {
  return (
    <div className="years d-flex py-2 gap-3 flex-column ">
      {data.map((item) => (
        <div
          key={item.id}
          className="border-1 fs-4 fw-bold text-white year mt-1"
          onClick={() => setInfo(item.date)}
        >
          {item.date}
        </div>
      ))}
    </div>
  );
};

export default MovieYear;
