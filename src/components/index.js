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
  const showFormModal = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "ADD ACCOUNTS",
        html: (
          <ModalForm
            values={values}
            onSubmit={(values) => {
              console.log("Hello");
              BankAccountServices.sendOtp("0927355418");
              //   dispatch(
              //     createTutorial(
              //       values.accountHolder,
              //       values.accountNumber,
              //       values.bankName,
              //       currentUser.id
              //     )
              //   )
              // .then(() => {})
              // .catch((e) => console.log(e));
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
                    onSubmit={(values) => {
                      console.log("Hello from the second swal");
                      resolve(values);
                      console.log(values);

                      Swal.fire({
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 3000,
                      });
                    }}
                  ></Otp>
                ),
                onClose: () => reject(),
                showConfirmButton: false,
              });
              //   MySwal.close();
              //   Swal.close();
            }}
            onCancel={() => Swal.close()}
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
