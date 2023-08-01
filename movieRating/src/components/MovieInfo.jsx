import React from "react";

const MovieInfo = ({ data, info }) => {
  const filteredData = data.filter((item) => item.date === Number(info));
  const dataObj = filteredData[0];

  let stars = "";
  for (let i = 1; i < 6; i++) {
    if (i <= Math.floor(dataObj.rate / 2)) {
      stars += "⭐";
    }
  }

  console.log(dataObj);

  return (
    <div className=" right_card pt-3 ">
      <h1 className="text-primary">{dataObj.title}</h1>
      <p>{dataObj.body}</p>
      <p className="text-danger">{dataObj.tags.join("/")}</p>
      <p>
        <span>{stars}</span>{" "}
        <span className="text-success">{dataObj.rate.toFixed(1)}/10</span>
      </p>
      <div classname="card p-1 mb-3 " style={{ width: "35vw" }}>
        <img
          src={dataObj.img}
          className="card-img-top img-thumbnail border border-primary card"
          alt="..."
        />
        <div className="card-body"></div>
      </div>
    </div>
  );
};

export default MovieInfo;
