import React from "react";
import Icon from "../../components/Icon";

function Nav() {
  return (
    <>
      <div className="fixed top-0 left-0 z-20 w-full shadow-md navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li className="dropdown dropdown-bottom">
                <label tabIndex={0} className="m-1">
                  Documentation
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a href="/intro">Intro</a>
                  </li>
                  <li>
                    <a href="/apidocs">Our API's</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <Icon re = "/" />
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="dropdown dropdown-bottom">
              <label tabIndex={0} className="m-1">
                Documentation
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="/intro">Intro</a>
                </li>
                <li>
                  <a href="/apidocs">Our API's</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/sandbox">Sandbox</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="px-1 menu menu-horizontal">
            <li>
              <a href="/auth">Log in</a>
            </li>
            <li>
              <a href="/auth/registration">Sign Up</a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
