import React, { useState, useEffect } from "react";
import BankAccountServices from "../../services/bank-account.services";
import AuthService from "../../services/auth.service";
import { getAccounts } from "../../store/actions/bank_accountAction";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal";
function Accounts() {
  const [pendinRequest, setpendinRequest] = useState([]);

  const [isOpen, setisOpen] = useState(false);
  const [page, setPage] = useState(null);

  const handleIsOpen = () => {
    if (isOpen) {
      console.log("closiiing");
      setisOpen(false);
    } else {
      console.log("opening");
      setisOpen(true);
    }
  };

  const dispatch = useDispatch();

  // const [currentUser, setCurrentUser] = useState();

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

  const usersListData = useSelector((state) => state.accountsList);
  console.log(usersListData);
  const { loading, error, bankAccounts } = usersListData;
  console.log(bankAccounts);
  useEffect(() => {
    dispatch(getAccounts());
  }, []);
  const setLabel = () => {
    console.log(isOpen);
    if (isOpen) {
      return "my-modal-4";
    } else {
      return "";
    }
  };
  // console.log(pendinRequest);

  if (bankAccounts) {
    const renderList = bankAccounts.map((item, index) => (
      <tr>
        <th>{item.bankaccount_id}</th>
        <td>{item.accountHolderName}</td>
        <td>{item.accountNumber}</td>
        <td>{item.bankName}</td>

        {/* <td>
          <a href="">view</a>
        </td> */}
      </tr>
    ));
    return (
      <>
        <div className="w-5/6 m-4">
          <label
            // onClick={handleIsOpen}
            htmlFor={setLabel()}
            className="mb-4 btn btn-outline btn-primary"
          >
            Add New
          </label>
          {isOpen && (
            <Modal handleIsOpen={handleIsOpen} isOpen={isOpen} page={page} />
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
              <tbody>
                <tr>
                  {/* <th>1</th>
                  <td>ME</td>
                  <td>1022225648986</td>
                  <td>CBO</td>
                  <td>Verified</td> */}
                </tr>
                {renderList}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Accounts;
