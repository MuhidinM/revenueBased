import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";

function Usermanagement() {
  const [modaState, setModalState] = useState(false);

  const showModal = () => {
    console.log("show the modal");
    console.log(modaState);
    setModalState(true);
  };

  const hideModal = () => {
    setModalState(false);
  };
  return (
    <>
      <div className="w-5/6 m-4">
        <label
          htmlFor="my-modal-4"
          onClick={showModal}
          className="mb-4 btn btn-outline btn-primary"
        >
          Add new User
        </label>
        {modaState && (
          <Modal show={showModal} handleClose={hideModal} page="b">
            <p>Modal</p>
          </Modal>
        )}
        <div className="mt-4 overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Api key</th>
                <th>Account</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Default</td>
                <td>Qjnalfjvndljnv3094889mdkco983</td>
                <td>CBO</td>
                <td>
                  <Link to={"/users/uapi"}>Copy</Link>
                </td>
                <td>
                  <Link className="link link-error" to={"/users/uapi"}>
                    Delete
                  </Link>
                </td>
              </tr>
              <tr className="hover">
                <th>2</th>
                <td>Hart</td>
                <td>ij894ujn498jn48hg84n484n84nbn</td>
                <td>CBE</td>
                <td>
                  <Link to={"/users/uapi"}>Copy</Link>
                </td>
                <td>
                  <Link className="link link-error" to={"/users/uapi"}>
                    Delete
                  </Link>
                </td>
              </tr>
              <tr>
                <th>3</th>
                <td>Brice</td>
                <td>ahvoprmmrko0004kmtk033m9555tg</td>
                <td>BOA</td>
                <td>
                  <Link to={"/users/uapi"}>Copy</Link>
                </td>
                <td>
                  <Link className="link link-error" to={"/users/uapi"}>
                    Delete
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Usermanagement;
