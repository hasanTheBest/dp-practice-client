import axios from "axios";
import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import AppointmentCard from "./AppointmentCard";
import AppointmentModal from "./AppointmentModal";

/* let appointments = [
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
]; */

const AppointmentAvailablity = ({ appointmentDate }) => {
  const [appointmentModalData, setAppointmentModalData] = useState(null);

  // Queries
  const {
    isLoading,
    error,
    data: appointments,
  } = useQuery("treatments", () => axios.get("/treatments"));

  if (isLoading) return "Loading....";

  if (error) return "Error while fetching data " + error.message;

  return (
    <section className="py-16">
      <div className="container px-4 lg:px-8 xl:px-16">
        <h6 className="text-primary mb-20 text-xl font-semibold text-center">
          Available Appointments on {format(appointmentDate, "PP")}
        </h6>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {appointments.data.map((treatment) => (
            <AppointmentCard
              key={treatment._id}
              {...treatment}
              setAppointmentModalData={setAppointmentModalData}
              appointmentDate={format(appointmentDate, "PP")}
            />
          ))}
        </div>
      </div>

      {appointmentModalData && (
        <AppointmentModal appointmentModalData={appointmentModalData} />
      )}
    </section>
  );
};

export default AppointmentAvailablity;
