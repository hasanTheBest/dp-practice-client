import React from "react";
import { useForm } from "react-hook-form";

const AppointmentModal = ({ title, appointment, appointmentDate }) => {
  // input validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handle appointment submit
  const handleAppointmentSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <label htmlFor="appointment-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="appointment-modal">
          <label
            htmlFor="appointment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="text-lg font-bold text-center mb-6">{title}</h3>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleAppointmentSubmit)}
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* Appointment Date */}
            <div className="flex flex-col gap-2">
              <input
                type="text"
                className="input input-bordered w-full"
                defaultValue={appointmentDate}
                readOnly
                {...register("appointmentDate", { required: true })}
              />
              {errors.appointmentDate && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* Appointment time */}
            <div className="flex flex-col gap-2">
              <input
                type="text"
                className="input input-bordered w-full"
                defaultValue={appointment}
                readOnly
                {...register("appointmentTime", { required: true })}
              />
              {errors.appointmentTime && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* Phone number */}
            <div className="flex flex-col gap-2">
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Phone number"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <input
              type="submit"
              className={`btn btn-primary btn-wide self-center`}
              value="Book Now"
            />
          </form>
        </label>
      </label>
    </div>
  );
};

export default AppointmentModal;
