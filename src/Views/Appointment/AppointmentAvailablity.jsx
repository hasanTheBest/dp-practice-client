import React from "react";

const appointments = [
  {
    _id: 1,
    title: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    location: "10 SPACES AVAILABLE",
  },
  {
    _id: 2,
    title: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    location: "10 SPACES AVAILABLE",
  },
  {
    _id: 3,
    title: "Cosmetic Dentistry",
    time: "8:00 AM - 9:00 AM",
    location: "10 SPACES AVAILABLE",
  },
  {
    _id: 4,
    title: "Teeth Cleaning",
    time: "8:00 AM - 9:00 AM",
    location: "10 SPACES AVAILABLE",
  },
  {
    _id: 5,
    title: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    location: "10 SPACES AVAILABLE",
  },
  {
    _id: 6,
    title: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    location: "10 SPACES AVAILABLE",
  },
];

const Appointment = ({ title, time, location }) => (
  <div className="card bg-neutral text-neutral-content">
    <div className="card-body items-center text-center">
      <h2 className="card-title text-primary mb-4">{title}</h2>
      <p>{time}</p>
      <p>{location}</p>
      <div className="card-actions justify-end mt-4">
        <button className="btn btn-primary">Book Appointment</button>
      </div>
    </div>
  </div>
);

const AppointmentAvailablity = () => {
  return (
    <section className="py-16">
      <div className="container px-4 lg:px-8 xl:px-16">
        <h6 className="text-primary mb-20 text-xl font-semibold text-center">
          Available Appointments on April 30, 2022
        </h6>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {appointments.map((appointment) => (
            <Appointment key={appointment._id} {...appointment} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppointmentAvailablity;
