import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-8">
        <h2 className="font-semibold text-2xl text-center">
          Register An Account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URl" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <button className="btn btn-neutral mt-4">Login</button>
            <p>
              Already have an account?{" "}
              <span className="text-blue-500 underline font-semibold">
                <Link to={`/auth/login`}>Login</Link>
              </span>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
