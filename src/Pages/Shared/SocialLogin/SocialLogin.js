import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../Hooks/useToken";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [token] = useToken(user);

  if (loading) {
    return <Loading></Loading>;
  }
  let errorElement;
  if (error) {
    errorElement = <p className="text-red-600 text-sm mb-1">{error.message}</p>;
  }
  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="divider my-5">OR</div>
      {errorElement}
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline btn-accent block mx-auto"
      >
        Continue With Google
      </button>
    </div>
  );
};

export default SocialLogin;
