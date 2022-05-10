import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryBtn from "../../Shared/PrimaryBtn/PrimaryBtn";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen px-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <img
              src={chair}
              className=" rounded-lg shadow-2xl w-10/12 ml-auto "
              alt=""
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl text-gray-600 font-bold">
              Your New Smile Starts Here
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryBtn>Get Started</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
