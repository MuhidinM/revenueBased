import React, { useState } from "react";
import { Link } from "react-router-dom";
import M2settingView from "./M2settingView";
function Tablesite(props) {
  const tableData = props.request;
  const [isOpen, setisOpen] = useState(false);
  // console.log(window.name);
  // const [prop, setprop] = useState(null);
  // if (props.request) {
  //   setprop(props.request);
  // }
  const setBoolean = () => {
    console.log("Hello");
    setisOpen(true);
  };
  if (tableData) {
    return (
      <>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Legal Name</th>
                <th>Incorporation Type</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <th>{tableData.bussiness_id}</th>
                <td>{tableData.legalName}</td>
                <td>{tableData.incorporationType}</td>
                <td>{tableData.status}</td>
                <td>
                  <label
                    htmlFor="my-modal-3"
                    className="cursor-pointer"
                    onClick={setBoolean}
                  >
                    <svg
                      className="w-6 h-6 text-primary"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
                      <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
                      <line x1="16" y1="5" x2="19" y2="8" />
                    </svg>
                  </label>
                </td>
                <td>
                  <a href="">view</a>
                </td>
              </tr>
            </tbody>
          </table>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="relative w-11/12 max-w-3xl modal-box">
              <label
                htmlFor="my-modal-3"
                className="absolute btn btn-sm btn-circle right-2 top-2"
              >
                ✕
              </label>

              {window.location.pathname === "/admin/activate" && isOpen ? (
                <M2settingView
                  modal_data={tableData}
                  title="View Unactivated Account"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Tablesite;
