import React, { useEffect } from "react";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading/Loading";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);

    console.log(data);
  };
  const [token] = useToken(user);
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading) {
    return <Loading></Loading>;
  }
  let errorElement;
  if (error) {
    errorElement = <p className="text-red-600 text-sm mb-1">{error.message}</p>;
  }

  return (
    <>
      <div className="h-screen  flex items-center justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className=" text-center font-bold text-2xl">Login Here !</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Provide a valid email",
                    },
                  })}
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                />{" "}
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Password Must Be More Than 6",
                    },
                  })}
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full max-w-xs"
                />{" "}
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {errorElement}
              <input
                className="btn btn-accent w-full max-w-xs text-white"
                type="submit"
                value="Login"
              />
            </form>
            <p className="text-sm">
              <small>
                New to Doctors Portal?{" "}
                <Link className="text-primary" to="/signup">
                  Create new account
                </Link>{" "}
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
