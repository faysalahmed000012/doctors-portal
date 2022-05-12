import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  let errorElement;
  if (error) {
    errorElement = <p className="text-red-600 text-sm mb-1">{error.message}</p>;
  }
  return (
    <div>
      <div class="divider my-5">OR</div>
      {errorElement}
      <button
        onClick={() => signInWithGoogle()}
        class="btn btn-outline btn-accent block mx-auto"
      >
        Continue With Google
      </button>
    </div>
  );
};

export default SocialLogin;
