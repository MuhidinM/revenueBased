import React from "react";
import Maccounts from "./Maccounts";
import Mapi from "./Mapi";
import Mbank from "./Mbank";
import Msite from "./Msite";

function Modal() {
  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className="relative w-11/12 max-w-5xl modal-box">
          <label
            htmlFor="my-modal-4"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          {window.location.pathname === "/admin/sites" ? (
            <Msite title="Add Site" />
          ) : window.location.pathname === "/admin/banks" ? (
            <Mbank title="Add Bank"/>
          ) : window.location.pathname === "/users/uapi" ? (
            <Mapi title="Generate API"/>
          ) : window.location.pathname === "/users/accounts" ? (
            <Maccounts title="Add Account"/>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Modal;
