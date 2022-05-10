import React from "react";
import background from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      style={{ background: `url(${background})` }}
      className="mt-14 py-16"
    >
      <h2 className="text-center text-primary text-lg font-semibold">
        Contact Us
      </h2>
      <h3 className="text-center text-2xl text-white">
        Stay connected with us
      </h3>

      <div className="flex flex-col items-center justify-center">
        <form className="mt-10" action="">
          <input
            type="Email"
            placeholder="Email Address"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full my-5"
          />
          <textarea
            className="textarea textarea-bordered w-full block mb-5"
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
