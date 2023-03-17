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
                  <Link to="/users/domains">
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
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    Domains
                  </Link>
                </li>
                <li>
                  <Link to="/users/devices">
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
                    Devices
                  </Link>
                </li>
                <li>
                  <Link to="/users/qr">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                      />
                    </svg>
                    Generate QR Code
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}

            <div className="divider"></div>
            <li>
              <Link className="hover:bg-inherit">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Docs
              </Link>
            </li>
            <li>
              <Link to={"/intro"}>
                <svg
                  class="w-6 h-6 text-primary"
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
                  <path d="M6 6v6a3 3 0 0 0 3 3h10l-5 -5m0 10l5 -5" />
                </svg>
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
                  <circle cx="6" cy="19" r="2" />{" "}
                  <circle cx="18" cy="5" r="2" />{" "}
                  <path d="M12 19h4.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h3.5" />
                </svg>
                Itroduction
              </Link>
            </li>
            <li>
              <Link to={"/apidocs"}>
                <svg
                  class="w-6 h-6 text-primary"
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
                  <path d="M6 6v6a3 3 0 0 0 3 3h10l-5 -5m0 10l5 -5" />
                </svg>
                <svg
                  class="w-6 h-6 text-primary"
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
                  <polyline points="7 8 3 12 7 16" />{" "}
                  <polyline points="17 8 21 12 17 16" />{" "}
                  <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
                API Usage
              </Link>
            </li>
            <li>
              <Link to={"/contact"}>
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
                  <circle cx="12" cy="12" r="9" />{" "}
                  <line x1="12" y1="17" x2="12" y2="17.01" />{" "}
                  <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                </svg>
                Help
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Sidebar;
