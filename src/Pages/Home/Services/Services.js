import React from "react";
import Cavity from "../../../assets/images/cavity.png";
import Fluoride from "../../../assets/images/fluoride.png";
import Whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  return (
    <div>
      <div className="mt-28 mb-16 mx-auto px-12">
        <h1 className="text-primary text-lg text-center font-bold">
          OUR SERVICES
        </h1>
        <h1 className=" text-2xl text-center">Services We Provide</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
        <Service title="Cavity Filling" img={Cavity}></Service>
        <Service title="Fluoride Treatment" img={Fluoride}></Service>
        <Service title="Teeth Whitening" img={Whitening}></Service>
      </div>
    </div>
  );
};

export default Services;
