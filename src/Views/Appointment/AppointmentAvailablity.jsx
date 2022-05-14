import { injectThemes } from "daisyui/src/colors/functions";
import { format } from "date-fns";
import React, { useEffect, useRef, useState } from "react";

const appointments = [
  {
    _id: 1,
    title: "Teeth Orthodontics",
    time: [
      "8:00 AM - 9:00 AM",
      "9:00 AM - 10:00 AM",
      "10:00 AM - 11:00 AM",
      "11:00 AM - 12:00 PM",
      "3:00 PM - 4:00 AM",
      "4:00 PM - 6:00 AM",
      "7:00 PM - 8:00 AM",
      "8:00 PM - 10:00 AM",
    ],
  },
  {
    _id: 2,
    title: "Teeth Orthodontics",
    time: [
      "8:00 AM - 9:00 AM",
      "9:00 AM - 10:00 AM",
      "11:00 AM - 12:00 PM",
      "7:00 PM - 8:00 AM",
      "8:00 PM - 10:00 AM",
    ],
  },
  {
    _id: 3,
    title: "Cosmetic Dentistry",
    time: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "7:00 PM - 8:00 AM"],
  },
  {
    _id: 4,
    title: "Teeth Cleaning",
    time: [],
  },
  {
    _id: 5,
    title: "Teeth Orthodontics",
    time: [
      "8:00 AM - 9:00 AM",
      "9:00 AM - 10:00 AM",
      "10:00 AM - 11:00 AM",
      "11:00 AM - 12:00 PM",
      "7:00 PM - 8:00 AM",
      "8:00 PM - 10:00 AM",
    ],
  },
  {
    _id: 6,
    title: "Teeth Orthodontics",
    time: ["8:00 AM - 9:00 AM", "10:00 AM - 11:00 AM", "8:00 PM - 10:00 AM"],
  },
];

const Appointment = ({ title, time, setTreatment, setAppointment }) => {
  const [select, setSelect] = useState(null);
  const selectRef = useRef(null);

  useEffect(() => {
    setSelect(selectRef?.current?.value);
  }, []);

  const handleAppointment = (e) => {
    setSelect(e.target.value);
  };

  const handleClickBookAppointment = () => {
    setTreatment(title);
    setAppointment(select);
  };

  return (
    <>
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-primary mb-4">{title}</h2>

          {time.length > 0 && (
            <select
              class="select select-ghost w-full"
              onChange={handleAppointment}
              ref={selectRef}
            >
              {time.map((t, i) => (
                <option key={i} value={t} selected={i === 0}>
                  {t}
                </option>
              ))}
            </select>
          )}

          <p>{`${time.length} SPACES AVAILABLE`}</p>
          <div className="card-actions justify-end mt-4">
            <label
              for="appointment-modal"
              class="btn btn-primary modal-button"
              disabled={time.length === 0}
              onClick={handleClickBookAppointment}
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

const AppointmentModal = ({ title, appointment }) => {
  return (
    <>
      <input type="checkbox" id="appointment-modal" class="modal-toggle" />
      <label for="appointment-modal" class="modal cursor-pointer">
        <label class="modal-box relative" for="appointment-modal">
          <label
            for="appointment-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 class="text-lg font-bold text-center mb-6">{title}</h3>

          <form className="flex flex-col gap-4 items-center">
            <input
              type="text"
              placeholder="Your Name"
              class="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              class="input input-bordered w-full"
            />
            <input
              type="text"
              class="input input-bordered w-full"
              value={appointment}
              disabled
            />

            <input
              type="submit"
              className="btn btn-primary btn-wide"
              value="Book Now"
            />
          </form>
        </label>
      </label>
    </>
  );
};

const AppointmentAvailablity = ({ appointmentData }) => {
  const [treatment, setTreatment] = useState("");
  const [appointment, setAppointment] = useState(null);

  return (
    <section className="py-16">
      <div className="container px-4 lg:px-8 xl:px-16">
        <h6 className="text-primary mb-20 text-xl font-semibold text-center">
          Available Appointments on {format(appointmentData, "PP")}
        </h6>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {appointments.map((appointment) => (
            <Appointment
              key={appointment._id}
              {...appointment}
              setAppointment={setAppointment}
              setTreatment={setTreatment}
            />
          ))}
        </div>
      </div>

      <AppointmentModal title={treatment} appointment={appointment} />
    </section>
  );
};

export default AppointmentAvailablity;
