import React from "react";
import chair from "../../../assets/images/chair.png";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div>
      <div className="hero min-h-screen px-6 lg:px-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <img
              src={chair}
              className=" rounded-lg shadow-2xl w-full lg:w-10/12 ml-auto "
              alt=""
            />
          </div>
          <div className="flex-1 flex justify-center">
            <div>
              <DayPicker
                className=""
                mode="single"
                selected={date}
                onSelect={setDate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
