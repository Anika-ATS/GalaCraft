import React from "react";
import logo from "../assets/image/Ivory and Pink Cute Minimalist Hand With Ring Illustration Happy Valentine's Day Instagram Post.png";
const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-blue-200 via- to-purple-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        <div
          tabIndex={0}
          role="button"
          className="mx-5 btn btn-ghost btn-circle avatar"
        >
          <div className="w-96 rounded-full ">
            <img alt="Tailwind CSS Navbar component" src={logo} />
          </div>
        </div>
        <a className=" text-3xl mx-5 text-purple-500 font-serif">GalaCraft</a>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>

          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
      <a className="btn gap-2 ">Sign in</a>
      <a className="btn gap-2">Sign up</a>
    </div>
  );
};

export default Navbar;
