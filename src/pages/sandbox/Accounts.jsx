import React, { useState, useEffect } from "react";
import BankAccountServices from "../../services/bank-account.services";
import AuthService from "../../services/auth.service";
import Modal from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccounts,
  setPrimaryAccount,
} from "../../store/actions/bank_accountAction";
import Selectinput from "../../components/Selectinput";
import ModalFire from "../../components/index";

const choose = [];

function Accounts() {
  const [pendinRequest, setpendinRequest] = useState([]);
  // const [currentUser, setCurrentUser] = useState();
  const [modaState, setModalState] = useState(false);
  const [selectedArray, setSelectedArray] = useState();
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

  console.log(bankAccounts);

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(setPrimaryAccount(e.target.value))
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  if (bankAccounts) {
    console.log(bankAccounts);
    for (let index = 0; index < bankAccounts.length; index++) {
      const element = bankAccounts[index];
      // console.log(element);
      console.log("running");
      if (choose.length < bankAccounts.length) {
        choose.push({
          label: element.bankName + "-" + element.accountNumber,
          value: element.bankaccount_id,
        });
      }
    }
    console.log(choose);
    const renderList = bankAccounts.map((item, index) => (
      <tr>
        <th>{item.bankaccount_id}</th>
        <td>{item.accountHolderName}</td>
        <td>{item.accountNumber}</td>
        <td>{item.bankName}</td>
        <td>{item.primaryAccount === "1" ? "primary" : "secondary"}</td>
      </tr>
    ));
    return (
      <>
        <div className="w-5/6 m-4">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-12">
            <div className="col-span-8 mt-6">
              {/* <label
                htmlFor="my-modal-4"
                onClick={showModal}
                className="mb-4 btn btn-outline btn-primary"
              >
                Add New
              </label> */}
              <ModalFire></ModalFire>
            </div>
            <div className="col-span-2">
              <Selectinput
                arr={choose}
                id="choose"
                name="choose"
                // value={props.values.industry}
                handleChange={handleChange}
                title="Choose Primary"
              />
            </div>
          </div>

          {/* {modaState && (
            <Modal show={showModal} handleClose={hideModal} page="a">
              <p>Modal</p>
            </Modal>
          )} */}

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