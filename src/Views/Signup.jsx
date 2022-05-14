import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="py-8 md:py-16">
      <div class="card bg-base-100 shadow-xl max-w-md mx-auto">
        <div class="card-body">
          <h2 class="text-xl font-bold mb-4 text-center">Sign Up</h2>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <input
                type="name"
                placeholder="Your Name"
                class="input input-bordered w-full"
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
                class="input input-bordered w-full"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <input
                type="password"
                placeholder="Your Password"
                class="input input-bordered w-full"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* Submit button */}
            <input
              type="submit"
              className="btn btn-primary btn-wide self-center"
              value="Register"
            />
          </form>

          <div class="divider">OR</div>

          <button class="btn btn-outline btn-secondary">
            login with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
