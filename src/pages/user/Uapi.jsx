import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import GenerateApiModal from "../../components/GenerateApi";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccounts,
  setPrimaryAccount,
} from "../../store/actions/bank_accountAction";

function Uapi() {
  const primaryAccount = [];
  const AccountListData = useSelector((state) => state.accountsList);
  const { loading, error, bankAccounts } = AccountListData;
  const [currentUser, setCurrentUser] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    // setCurrentUser(user);
    dispatch(getAccounts());
    console.log(bankAccounts);

    // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
    // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
  }, []);

  if (bankAccounts) {
    for (let index = 0; index < bankAccounts.length; index++) {
      const element = bankAccounts[index];
      console.log(element.primaryAccount);
      if (element.primaryAccount === "1") {
        primaryAccount.push(element.accountNumber);
      }
    }
    console.log(primaryAccount);
    return (
      <>
        <div className="w-5/6 m-4">
          <GenerateApiModal accountNumber={primaryAccount}></GenerateApiModal>
          {/* <GenerateApiModal></GenerateApiModal> */}
          {/* {modaState && (
            <Modal show={showModal} handleClose={hideModal} page="b">
              <p>Modal</p>
            </Modal>
          )} */}

          <div className="mt-4 overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Secrate Key</th>
                  <th>Api key</th>
                  <th>Client Id</th>
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
}

export default Uapi;
