import React from "react";
import background from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      style={{ background: `url(${background})` }}
      className="mt-14 py-16 px-9"
    >
      <h2 className="text-center text-primary text-xl font-semibold">
        Contact Us
      </h2>
      <h3 className="text-center text-4xl text-white">
        Stay connected with us
      </h3>

      <div className="flex flex-col lg:items-center  justify-center">
        <form className="mt-10 px-auto lg:px-0" action="">
          <input
            type="Email"
            placeholder="Email Address"
            className="input block mx-auto lg:inline input-bordered border-primary w-full"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input block mx-auto lg:inline  input-bordered border-primary w-full my-5"
          />
          <textarea
            className="textarea  mx-auto  textarea-bordered border-primary w-full block mb-5"
            placeholder="Your Message"
          ></textarea>
          <button
            className="btn btn-primary rounded-md text-white font-bold uppercase bg-gradient-to-r from-secondary to-primary block mx-auto"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
