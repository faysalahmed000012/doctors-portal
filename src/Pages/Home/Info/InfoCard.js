import React from "react";

const InfoCard = ({ img, color, title }) => {
  return (
    <div className={`card card-side ${color} shadow-xl rounded-xl`}>
      <figure className="pl-5">
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body text-white">
        <h2 className=" card-title">{title}</h2>
        <p className=" ">Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
