import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div>
      <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-xl font-bold text-primary">{name}</h2>
          <p className="text-sm text-center">
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500">No Slots Available</span>
            )}
          </p>
          <p className="text-sm text-center">
            {slots.length}{" "}
            {slots.length > 1 ? "slots available" : "slot available"}
          </p>
          <div class="card-actions justify-end">
            <label
              onClick={() => setTreatment(service)}
              disabled={slots.length === 0}
              for="booking-modal"
              class="mt-3 mx-auto btn btn-secondary text-white uppercase g-gradient-to-r from-secondary to-primary"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
