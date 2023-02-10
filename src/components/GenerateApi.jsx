import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import { ModalForm } from "./GenerateApiForm";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import BankAccountServices from "../services/bank-account.services";
import { generateApiKey } from "../store/actions/generateApiKeyAction";
import Otp from "./Otp";

const MySwal = withReactContent(Swal);

function GenerateApiModal(props) {
  const showFormModal = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "GENERATE NEW API KEY",
        html: (
          <ModalForm
            values={values}
            onSubmit={(values) => {
              console.log("Your button is got Clicked");
              console.log(values);
              console.log(currentUser);
              dispatch(generateApiKey(currentUser.email, values.expiryDate));

              resolve(values);
              Swal.fire({
                icon: "success",
                title: "Your Key has been generated",
                showConfirmButton: false,
                timer: 3000,
              });

              //   MySwal.close();
              //   Swal.close();
            }}
            onCancel={() => MySwal.close()}
          />
        ),
        onClose: () => reject(),
        onCancel: () => Swal.close(),
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
      accountNumber: props.accountNumber[0],
      expiryDate: "",
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
      Generate New Api
    </button>
  );
}

export default GenerateApiModal;
