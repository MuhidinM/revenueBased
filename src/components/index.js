import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import { ModalForm } from "./ModalForm";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import BankAccountServices from "../services/bank-account.services";
import { createTutorial } from "../store/actions/bank_accountAction";
import Otp from "./Otp";
const MySwal = withReactContent(Swal);

function ModalFire() {
  const callOtpVerification = async (otp) => {
    const confirmedOtp = BankAccountServices.confirmOtp("0925825012", otp);
    console.log(confirmedOtp);
  };

  const showFormModal = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "ADD ACCOUNTS",
        html: (
          <ModalForm
            values={values}
            onSubmit={(values) => {
              console.log("Hello");
              BankAccountServices.sendOtp("0925825012");
              resolve(values);
              const value = {
                first: "",
                second: "",
                third: "",
                fourth: "",
                fifth: "",
                sixth: "",
              };
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
                          dispatch(
                            createTutorial(
                              values.accountHolder,
                              values.accountNumber,
                              values.bankName,
                              currentUser.id
                            ),
                            Swal.fire({
                              icon: "success",
                              title: "Your work has been saved",
                              showConfirmButton: false,
                              timer: 3000,
                            })
                          ).then(() => {
                            console.log("firing swal");
                          });
                        }
                      });

                      console.log(confirmedOtp);

                      // let confirmedOtp = async () =>
                      //   await BankAccountServices.confirmOtp("0932308204", otp);

                      if (confirmedOtp.data.status === "success") {
                      }

                      console.log(confirmedOtp);
                    }}
                  ></Otp>
                ),
                onClose: () => reject(),
                showConfirmButton: false,
              });
              //   MySwal.close();
              //   Swal.close();
            }}
            onCancel={() => {
              Swal.close();
            }}
          />
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
      accountHolder: "",
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
