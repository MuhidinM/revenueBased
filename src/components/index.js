import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch, useSelector } from "react-redux";
import { ModalForm } from "./ModalForm";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import BankAccountServices from "../services/bank-account.services";
import { createTutorial } from "../store/actions/bank_accountAction";
import { Provider } from "react-redux";
import store from "../store/store";
import Otp from "./Otp";

const MySwal = withReactContent(Swal);

function ModalFire() {
  const [customerName, setcustomerName] = useState("");
  const customerName2 = useRef("");
  const [dependency, setdependency] = useState(false);
  const AccountListData = useSelector((state) => state.accountsList);
  const dispatch = useDispatch();
  const { bankAccounts, message, accountMessage, criteriaValue, loading } =
    AccountListData;
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setcustomerName(criteriaValue);

      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);
  console.log("Criteria Value from index" + criteriaValue);
  console.log("Customer Name " + customerName);
  customerName2.current = criteriaValue;

  const interpretResponse = (response) => {
    let actionResponse = JSON.stringify(response);
    console.log("Action Response Is" + actionResponse.response);
    console.log(
      " Response Is" + response.response,
      response.message + "",
      response.responseCode
    );
    if (response.response === "success" || response.responseCode == 200) {
      console.log(response);
      console.log("Rsponse from useEffect is here" + response);
      Swal.fire({
        icon: "success",
        title: "Account Created",
        showConfirmButton: false,
        timer: 3000,
      });
    } else if (response.responseCode === 403 && response.respone === "error") {
      console.log("Un Authorised User ");
      Swal.fire({
        icon: "error",
        title: response.message,
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Account Is Not Created",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  const showFormModal = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "ADD ACCOUNTS",
        html: (
          <Provider store={store}>
            <ModalForm
              values={values}
              // sendNameToParent={sendNameToParent}
              onSubmit={(values) => {
                console.log("Hello");
                console.log(values);
                // let crtVal = getcriterialVal();
                // console.log(crtVal);
                const {
                  bankAccounts,
                  message,
                  accountMessage,
                  criteriaValue,
                  loading,
                } = AccountListData;

                console.log("Criteria Value 2 " + customerName2.current);
                // console.log("Id is" + currentUser.id);
                // console.log(customerName);
                // dispatch(
                //   createTutorial(
                //     customerName2.current,
                //     values.accountNumber,
                //     values.bankName,
                //     currentUser.id
                //   )
                // );

                const value = {
                  first: "",
                  second: "",
                  third: "",
                  fourth: "",
                  fifth: "",
                  sixth: "",
                };

                BankAccountServices.sendOtp("0925825012").then((res) => {
                  MySwal.fire({
                    title: "",
                    html: (
                      <Otp
                        values={value}
                        onSubmit={(values1) => {
                          console.log("Hello from the second swal");
                          resolve(values);
                          console.log(values.first);
                          const otp =
                            values1.first +
                            values1.second +
                            values1.third +
                            values1.fourth +
                            values1.fifth +
                            values1.sixth;

                          const confirmedOtp = BankAccountServices.confirmOtp(
                            "0925825012",
                            otp
                          ).then((res) => {
                            console.log("creating account");
                            if (res.status === "success") {
                              console.log("success is responded");
                              console.log(criteriaValue);
                              dispatch(
                                createTutorial({
                                  current: customerName2.current,
                                  accountNumber: values.accountNumber,
                                  bankName: values.bankName,
                                  id: currentUser.user.user_id,
                                  interpretResponse,
                                })
                              );
                            }
                          });
                        }}
                      ></Otp>
                    ),
                    onClose: () => reject(),
                    showConfirmButton: false,
                  });
                });
                resolve(values);

                MySwal.close();
                Swal.close();
              }}
              onCancel={() => {
                Swal.close();
              }}
            />
          </Provider>
        ),

        onClose: () => reject(),
        showConfirmButton: false,
      });
    });
  };

  const showModal = () => {
    showFormModal({
      accountNumber: "",
      bankName: "",
    })
      .then((values) => console.log(values))
      .catch(() => console.log("Modal closed"));
  };
  return (
    <button
      type="button"
      className="mb-4 btn btn-outline btn-primary"
      onClick={showModal}
    >
      Add New Account
    </button>
  );
}

export default ModalFire;
