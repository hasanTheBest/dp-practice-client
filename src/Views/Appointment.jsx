import React from "react";
import AppointmentAvailablity from "./Appointment/AppointmentAvailablity";
import AppointmentDatePicker from "./Appointment/AppointmentDatePicker";

const Appointment = () => {
  return (
    <>
      <AppointmentDatePicker />
      <AppointmentAvailablity />
    </>
  );
};

export default Appointment;
