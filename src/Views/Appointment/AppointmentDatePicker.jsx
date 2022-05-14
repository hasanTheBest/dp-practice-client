import React from "react";
// Day picker
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

// images
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";

const AppointmentDatePicker = ({ selected, setSelected }) => {
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
          <div className="flex-1">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              modifiersStyles={{
                selected: { backgroundColor: "#19D3AE" },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentDatePicker;
