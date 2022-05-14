import React from "react";
import AppointmentAvailablity from "./Appointment/AppointmentAvailablity";
import AppointmentDatePicker from "./Appointment/AppointmentDatePicker";

const Appointment = () => {
  const [selected, setSelected] = React.useState(new Date());
  return (
    <>
      <AppointmentDatePicker selected={selected} setSelected={setSelected} />
      <AppointmentAvailablity appointmentData={selected} />
    </>
  );
};

export default Appointment;
