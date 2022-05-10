import React from "react";

const Review = ({ review }) => {
  const { img, name, comment, area } = review;
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            dolorum, eos est id quaerat suscipit unde a possimus officiis.
            Deserunt.
          </p>
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 mr-4">
                <img src={img} alt="" />
              </div>
            </div>
            <div>
              <h2 className="text-lg">{name}</h2>
              <h2 className="">{area}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
