import React, { use } from "react";
import { NavLink } from "react-router";
import userIcon from "../../assets/user.png";
import { Link } from "react-router";
import { AuthContext } from "../../provider/authProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    console.log("logout");
    logOut()
      .then(() => {
        alert("User Logged out successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div>{user && user.name}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/about`}>About</NavLink>
        <NavLink to={`/career`}>Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img
          className="w-1/2 rounded-full"
          src={`${user ? user.photoURL : userIcon}`}
          alt=""
        />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-10">
            Logout
          </button>
        ) : (
          <Link to={`/auth/login`} className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
