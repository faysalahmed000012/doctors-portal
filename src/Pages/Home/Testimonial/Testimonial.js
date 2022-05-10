import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      area: "California",
      comment: "",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      area: "California",
      comment: "",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      area: "California",
      comment: "",
      img: people3,
    },
  ];

  return (
    <section className="ml-4 mt-20 px-12">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-md text-primary font-semibold">Testimonial</h2>
          <h3 className="text-2xl">What Our Patients Says</h3>
        </div>
        <div>
          <img src={quote} className="w-24 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
