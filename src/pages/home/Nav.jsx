import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon";
import AuthService from "../../services/auth.service";

function Nav() {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
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
                <Link to={"/"}>Home</Link>
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
                    <Link to={"/intro"}>Intro</Link>
                  </li>
                  <li>
                    <Link to={"/apidocs"}>Our API's</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <Icon re="/" />
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <Link to={"/"}>Home</Link>
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
                  <Link to={"/intro"}>Intro</Link>
                </li>
                <li>
                  <Link to={"/apidocs"}>Our API's</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={"/sandbox"}>Sandbox</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="px-1 menu menu-horizontal">
            {currentUser.client_id != null ? (
              <li>
                <Link to={"/users"}>Dashboard</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to={"/auth"}>Log in</Link>
                </li>
                <li>
                  <Link to={"/auth/registration"}>Sign Up</Link>
                </li>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
