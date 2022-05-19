import React, { useRef, useState } from "react";

const AppointmentCard = ({
  title,
  time: timeSlots,
  appointmentDate,
  setAppointmentModalData,
}) => {
  const formRef = useRef(null);

  const handleClickBookAppointment = () => {
    setAppointmentModalData({
      time: formRef.current.appointment.value,
      title,
      day: appointmentDate,
    });
  };

  return (
    <>
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-primary mb-4">{title}</h2>

          {timeSlots.length > 0 && (
            <form ref={formRef}>
              <select className="select select-ghost w-full" name="appointment">
                {timeSlots.map((t, i) => (
                  <option key={i} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </form>
          )}

          <p>{`${timeSlots.length} SPACES AVAILABLE`}</p>
          <div className="card-actions justify-end mt-4">
            <label
              htmlFor="appointment-modal"
              className="btn btn-primary modal-button"
              disabled={timeSlots.length === 0}
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

export default AppointmentCard;
