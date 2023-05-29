import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../../services/auth.service";
import { retrieveLoggedInUser } from "../../store/actions/userProfileAction";

function Sidebar() {
  const [currentUser, setCurrentUser] = useState({});
  const userData = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();
  const { loading, error, bankAccounts, userDetail } = userData;
  console.log("User Detail is: ", userDetail);
  useEffect(() => {
    dispatch(retrieveLoggedInUser());
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, [dispatch]);
  console.log(currentUser.client_id);
  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div className="shadow-md drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="p-4 menu w-80 bg-base-100 text-base-content dark:bg-gray-900 dark:text-white">
            {/* <!-- Sidebar content here --> */}
            <Icon re="/users/" />
            <div className=""></div>
            <li>
              <Link to={"/users"}>
                <svg
                  className="w-6 h-6 text-primary"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="12" cy="13" r="2" />{" "}
                  <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />{" "}
                  <path d="M6.4 20a9 9 0 1 1 11.2 0Z" />
                </svg>
                Dashboard
              </Link>
            </li>
            {currentUser.secrate_key == null ? (
              <>
                <li>
                  <Link to="/users/accounts">
                    <svg
                      className="w-6 h-6 text-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />{" "}
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                    Accounts
                  </Link>
                </li>
                <li>
                  <Link to={"/users/transactions"}>
                    <svg
                      className="w-6 h-6 text-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                    Transaction
                  </Link>
                </li>
                <li>
                  <Link to="/users/uapi">
                    <svg
                      className="w-6 h-6 text-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />{" "}
                      <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                    </svg>
                    Api Links
                  </Link>
                </li>
                <li>
                  <Link to="/users/sales">
                    <svg
                      class="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Sales
                  </Link>
                </li>
                <li>
                  <Link to="/users/inventory">
                    <svg
                      class="h-6 w-6 text-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <rect x="13" y="8" width="8" height="12" rx="1" />{" "}
                      <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />{" "}
                      <line x1="16" y1="9" x2="18" y2="9" />
                    </svg>
                    Inventory
                  </Link>
                </li>
                <li>
                  <Link to="/users/loan">
                    <svg
                      class="h-6 w-6 text-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <rect x="7" y="9" width="14" height="10" rx="2" />{" "}
                      <circle cx="14" cy="14" r="2" />{" "}
                      <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
                    </svg>
                    Loan List
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      )}
    </>
  );
}

export default Sidebar;
