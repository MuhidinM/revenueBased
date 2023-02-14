import React, { useEffect, useState } from "react";
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
  const AccountListData = useSelector((state) => state.accountsList);
  const { bankAccounts, message, accountMessage, criteriaValue, loading } =
    AccountListData;

  console.log("Criteria Value" + criteriaValue);
  // const sendNameToParent = (name) => {
  //   console.log("I got Clicked");
  //   setcustomerName(name);
  // };

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
                console.log("criteria value" + criteriaValue);
                setcustomerName(criteriaValue);
                const accountNumber = values.accountNumber;
                const bankName = values.bankName;
                const id = currentUser.id;
                value = { customerName, accountNumber, bankName, id };
                console.log(value);
                createTutorial(
                  customerName,
                  values.accountNumber,
                  values.bankName,
                  currentUser.id
                );
                // BankAccountServices.sendOtp("0925825012");
                resolve(values);
                const value = {
                  first: "",
                  second: "",
                  third: "",
                  fourth: "",
                  fifth: "",
                  sixth: "",
                };
                // MySwal.fire({
                //   title: "",
                //   html: (
                //     <Otp
                //       values={value}
                //       onSubmit={(values1) => {
                //         console.log("Hello from the second swal");
                //         resolve(values);
                //         console.log(values.first);
                //         const otp =
                //           values1.first +
                //           values1.second +
                //           values1.third +
                //           values1.fourth +
                //           values1.fifth +
                //           values1.sixth;

                //         const confirmedOtp = BankAccountServices.confirmOtp(
                //           "0925825012",
                //           otp
                //         ).then((res) => {
                //           console.log("creating account");
                //           if (res.status === "success") {
                //             console.log("success is responded");
                //             console.log(criteriaValue);
                //             dispatch(
                // createTutorial(
                //   criteriaValue,
                //   values.accountNumber,
                //   values.bankName,
                //   currentUser.id
                // ),
                //               Swal.fire({
                //                 icon: "success",
                //                 title: "Your work has been saved",
                //                 showConfirmButton: false,
                //                 timer: 3000,
                //               })
                //             ).then(() => {
                //               console.log("firing swal");
                //             });
                //           }
                //         });

                //         console.log(confirmedOtp);

                //         // let confirmedOtp = async () =>
                //         //   await BankAccountServices.confirmOtp("0932308204", otp);

                //         if (confirmedOtp.data.status === "success") {
                //         }

                //         console.log(confirmedOtp);
                //       }}
                //     ></Otp>
                //   ),
                //   onClose: () => reject(),
                //   showConfirmButton: false,
                // });
                //   MySwal.close();
                //   Swal.close();
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
  const [currentUser, setCurrentUser] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);
  const showModal = () => {
    showFormModal({
      // accountHolder: "",
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
