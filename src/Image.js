import React from "react";

const Image = ({ data }) => {
  return (
    <div className="container my-3">
      <img src={data[1]} className="img-thumbnail" alt={data[0]}></img>
      <p style={{ marginLeft: "15px" }}>{data[0]}</p>
    </div>
  );
};

export default Image;
