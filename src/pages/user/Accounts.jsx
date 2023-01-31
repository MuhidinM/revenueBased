import React, { useState, useEffect } from "react";
import BankAccountServices from "../../services/bank-account.services";
import AuthService from "../../services/auth.service";
import Modal from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getAccounts } from "../../store/actions/bank_accountAction";
import Selectinput from "../../components/Selectinput";
const choose = [
  { label: "A", value: "A" },
  { label: "B", value: "B" },
];

function Accounts() {
  const [pendinRequest, setpendinRequest] = useState([]);
  // const [currentUser, setCurrentUser] = useState();
  const [modaState, setModalState] = useState(false);
  const AccountListData = useSelector((state) => state.accountsList);
  console.log(AccountListData);
  const { loading, error, bankAccounts } = AccountListData;

  const showModal = () => {
    console.log("show the modal");
    console.log(modaState);
    setModalState(true);
  };

  const hideModal = () => {
    setModalState(false);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);
  // useEffect(() => {
  //   const user = AuthService.getCurrentUser();
  //   if (user) {
  //     console.log(user.id);
  //     async function fetchData() {
  //       const bankAccountByID = await BankAccountServices.getBankAccountById(
  //         user.id
  //       );
  //       if (bankAccountByID) {
  //         setpendinRequest(bankAccountByID);
  //       }
  //     }
  //     fetchData();
  //   }
  // }, []);

  console.log(bankAccounts);

  if (bankAccounts) {
    const renderList = bankAccounts.map((item, index) => (
      <tr>
        <th>{item.bankaccount_id}</th>
        <td>{item.accountHolderName}</td>
        <td>{item.accountNumber}</td>
        <td>{item.bankName}</td>
        <td>Verified</td>

        {/* <td>
          <a href="">view</a>
        </td> */}
      </tr>
    ));
    return (
      <>
        <div className="w-5/6 m-4">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-12">
            <div className="col-span-8 mt-6">
              <label
                htmlFor="my-modal-4"
                onClick={showModal}
                className="mb-4 btn btn-outline btn-primary"
              >
                Add New
              </label>
            </div>
            <div className="col-span-2">
              <Selectinput
                arr={choose}
                id="choose"
                name="choose"
                // value={props.values.industry}
                // handleChange={props.handleChange}
                title="Choose Primary"
              />
            </div>
          </div>

          {modaState && (
            <Modal show={showModal} handleClose={hideModal} page="a">
              <p>Modal</p>
            </Modal>
          )}

          <div className="mt-4 overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Account Holder</th>
                  <th>Account</th>
                  <th>Bank</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>{renderList}</tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Accounts;
