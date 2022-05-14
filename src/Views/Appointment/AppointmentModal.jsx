import React from "react";
import { useForm } from "react-hook-form";

const AppointmentModal = ({ title, appointment }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Book Now");
    console.log(data);
  };

  return (
    <div>
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

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Your Name"
                class="input input-bordered w-full"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your Email"
                class="input input-bordered w-full"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="email"
                class="input input-bordered w-full"
                value={appointment}
                disabled
                {...register("appointment", { required: true })}
              />
            </div>

            <input
              type="submit"
              className="btn btn-primary btn-wide self-center"
              value="Book Now"
            />
          </form>
        </label>
      </label>
    </div>
  );
};

export default AppointmentModal;
