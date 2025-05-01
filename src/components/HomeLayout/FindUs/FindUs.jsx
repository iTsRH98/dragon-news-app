import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold text-center text-xl my-5">Find Us On</h2>
      <div className="">
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 justify-start join-item">
            <FaFacebook size={24} /> Facebook
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaTwitter size={24} /> Twitter
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaInstagram size={24} /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
