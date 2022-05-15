import React from "react";
import { useForm } from "react-hook-form";
import auth from "../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

const Login = () => {
  // Authentication
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);

  // Input Validation
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Input form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  // handle click sign in with Google
  const handleClickLogInWithGoogle = () => signInWithGoogle();

  return (
    <section className="py-8 md:py-16">
      <div className="card bg-base-100 shadow-xl max-w-md mx-auto">
        <div className="card-body">
          <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
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

            {/* Submit button */}
            <input
              type="submit"
              className="btn btn-primary btn-wide self-center"
              value="Login"
            />
          </form>

          {/* Register and reset */}
          <div className="my-2 flex justify-between gap-2 text-sm font-semibold">
            <span>
              New user?{" "}
              <Link to="/signup" className="text-secondary uppercase">
                Sign Up
              </Link>
            </span>
            <span>
              Forget password?{" "}
              <button className="text-secondary uppercase">Reset</button>
            </span>
          </div>

          <div className="divider">OR</div>

          {errorGoogle && (
            <span className="mb-2 text-red-500">{errorGoogle.message}</span>
          )}

          {loadingGoogle ? (
            <button className="btn btn-outline btn-secondary btn-disabled loading">
              Log in with Google
            </button>
          ) : (
            <button
              className="btn btn-outline btn-secondary"
              onClick={handleClickLogInWithGoogle}
            >
              Log in with Google
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
