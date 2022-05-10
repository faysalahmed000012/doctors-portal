import React from "react";
import doctor from "../../../assets/images/doctor.png";
import PrimaryBtn from "../../Shared/PrimaryBtn/PrimaryBtn";
import background from "../../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${background})` }}
      className="flex items-center justify-center mt-64 w-full"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 pr-20">
        <h2 className="text-primary text-xl text-md font-bold">Appointment</h2>
        <h2 className=" text-3xl text-white my-6">Make an appointment Today</h2>
        <p className="text-white mb-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryBtn>Get Started</PrimaryBtn>
      </div>
    </section>
  );
};

export default MakeAppointment;
