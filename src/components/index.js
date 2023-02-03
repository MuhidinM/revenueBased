import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import { ModalForm } from "./ModalForm";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import { createTutorial } from "../store/actions/bank_accountAction";
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
              dispatch(
                createTutorial(
                  values.accountHolder,
                  values.accountNumber,
                  values.bankName,
                  currentUser.id
                )
              )
                .then(() => {})
                .catch((e) => console.log(e));
              resolve(values);
              Swal.fire("Saved!", "", "success");
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
