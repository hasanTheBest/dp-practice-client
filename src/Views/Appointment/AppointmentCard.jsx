import React, { useEffect, useRef, useState } from "react";

const AppointmentCard = ({ title, time, setTreatment, setAppointment }) => {
  const [select, setSelect] = useState(null);
  const selectRef = useRef(null);

  useEffect(() => {
    setSelect(selectRef?.current?.value);
  }, []);

  const handleChangeAppointment = (e) => {
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
              className="select select-ghost w-full"
              onChange={handleChangeAppointment}
              ref={selectRef}
            >
              {time.map((t, i) => (
                <option key={i} value={t}>
                  {t}
                </option>
              ))}
            </select>
          )}

          <p>{`${time.length} SPACES AVAILABLE`}</p>
          <div className="card-actions justify-end mt-4">
            <label
              htmlFor="appointment-modal"
              className="btn btn-primary modal-button"
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

export default AppointmentCard;
