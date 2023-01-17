import React from "react";

function Nav() {
  return (
    <>
      <div className="shadow-md navbar bg-base-100">
        <div className="flex-1">
          <label htmlFor="my-drawer-2" className="ml-4 drawer-button">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="" alt="Profile" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <span className="pt-4 pl-4">Merchant id: 77679399</span>
              <div className="divider"></div>
              <li>
                <a href="/users/profile" className="justify-between">
                  Profile{" "}
                </a>
              </li>
              <li>
                <a href="/users/setting">Settings</a>
              </li>
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
