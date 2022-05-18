import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0g1HL4P8YMieG1lSyrMnnpUgE6caNCRRkjb9wy5Pm2yNWw5DhJAPN7novmyEtvFkRADtqFDVoKSzCWQvKw2oqx00VDR8xvMH"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const { data: appointment, isLoading } = useQuery("appointment", () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="hero min-h-screen bg-base-200 rounded-lg">
      <div className="hero-content flex flex-col">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-primary">
              Hello {appointment.patientName}
            </h2>
            <h2 class="text-xl text-primary">
              Booking for {appointment.treatment}
            </h2>
            <p>
              See You on{" "}
              <span className="text-primary">{appointment.date}</span> at{" "}
              <span className="text-primary">{appointment.slot}</span>
            </p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm appointment={appointment} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
