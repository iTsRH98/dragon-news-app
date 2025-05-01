import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-5">Login With</h1>
      <div className="space-y-3">
        <button className="btn btn-outline btn-secondary w-full">
          <FcGoogle size={24} /> Login With Google
        </button>
        <button className="btn w-full btn-outline btn-primary">
          <FaGithub size={24} /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
