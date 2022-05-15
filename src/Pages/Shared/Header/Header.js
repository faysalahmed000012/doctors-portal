import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const menu = (
    <>
      <li>
        <CustomLink to="/">Home</CustomLink>
      </li>
      <li>
        <CustomLink to="/about">About</CustomLink>
      </li>
      <li>
        <CustomLink to="/appointment">Appointment</CustomLink>
      </li>
      <li>
        <CustomLink to="/reviews">Reviews</CustomLink>
      </li>
      <li>
        <CustomLink to="/contact">Contact</CustomLink>
      </li>
      {user && (
        <li>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
        </li>
      )}

      <li>
        {user ? (
          <button
            className=""
            onClick={() => {
              signOut(auth);
              localStorage.removeItem("accessToken");
            }}
          >
            Sign&nbsp;out
          </button>
        ) : (
          <CustomLink to="/login">Login</CustomLink>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <a href="#" className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </a>
      </div>
      <div className="ml-auto p-0 hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ml-auto gap-2">{menu}</ul>
      </div>
      <div className="navabr-end">
        <label
          htmlFor="dashboard-toggler"
          tabIndex="1"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
