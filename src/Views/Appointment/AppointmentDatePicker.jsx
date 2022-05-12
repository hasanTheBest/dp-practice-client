import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";

const AppointmentDatePicker = () => {
  return (
    <section
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-lg rounded-lg shadow-2xl flex-1"
            alt="Hero"
          />
          <div className="flex-1">Date picker here</div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentDatePicker;
