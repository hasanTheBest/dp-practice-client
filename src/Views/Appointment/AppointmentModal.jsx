import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import Alert from "../../Components/Alert";
import auth from "../../firebase.init";

const AppointmentModal = ({ title, appointment, appointmentDate }) => {
  // user information
  const [user, userLoading, userError] = useAuthState(auth);

  // input validation
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // booking the treatment
  const { isLoading, isError, isSuccess, error, mutate, data } = useMutation(
    (payload) => {
      return axios.post("http://localhost:5000/booking", payload);
    }
  );

  // handle appointment submit
  const handleAppointmentSubmit = (data) => mutate(data);

  if (userError) {
    return <Alert type="error" message={userError.message} />;
  }
  if (userLoading) {
    return <Alert type="info" message="User is loading...." />;
  }

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

          {/* booking error */}
          {isError && (
            <Alert
              type="error"
              message={`An Error Occurred: ${error.message}`}
            />
          )}

          {/* booking success */}
          {isSuccess && (
            <Alert
              type="error"
              message={`Successfully booked for ${data.name} on ${data.appointmentTime}, ${data.appointmentDate} `}
            />
          )}

          <form
            className="flex flex-col gap-4 mt-2"
            onSubmit={handleSubmit(handleAppointmentSubmit)}
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                defaultValue={user.displayName}
                {...register("name", {
                  required: true,
                })}
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
                defaultValue={user.email}
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
                {...register("appointmentTime", {
                  required: true,
                  value: watch("appointmentTime"),
                })}
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

            {/* booking loading */}
            {isLoading ? (
              <input
                type="button"
                className="btn btn-primary btn-wide self-center loading btn-disabled"
                value="Booking ...."
              />
            ) : (
              <input
                type="submit"
                className={`btn btn-primary btn-wide self-center`}
                value="Book Now"
              />
            )}
          </form>
        </label>
      </label>
    </div>
  );
};

export default AppointmentModal;
