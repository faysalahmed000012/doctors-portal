import React from "react";

const PrimaryBtn = ({ children }) => {
  return (
    <div>
      <button className="btn btn-primary rounded-md text-white font-bold uppercase bg-gradient-to-r from-secondary to-primary">
        {children}
      </button>
    </div>
  );
};

export default PrimaryBtn;