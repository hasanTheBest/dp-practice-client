import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Signup = () => {
  // Authentication
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile] = useUpdateProfile(auth);

  // input validation
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ name, email, password }) => {
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  if (user) console.log(user);

  return (
    <section className="py-8 md:py-16">
      <div className="card bg-base-100 shadow-xl max-w-md mx-auto">
        <div className="card-body">
          <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <input
                type="name"
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

            {/* Password */}
            <div className="flex flex-col gap-2">
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {error && (
              <span className="-mb-1 text-red-500">{error.message}</span>
            )}

            {/* Submit button */}
            {loading ? (
              <button className="btn btn-primary btn-wide self-center loading btn-disabled">
                Register
              </button>
            ) : (
              <input
                type="submit"
                className="btn btn-primary btn-wide self-center"
                value="Register"
              />
            )}
          </form>

          <div className="my-2 flex justify-between gap-2 text-sm font-semibold">
            <span>
              Already a user?{" "}
              <Link to="/login" className="text-secondary uppercase">
                Login
              </Link>
            </span>
          </div>

          <div className="divider">OR</div>

          <button className="btn btn-outline btn-secondary">
            login with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
