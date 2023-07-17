import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../services/auth.service";
import BankAccountServices from "../services/bank-account.services";
import { createTutorial } from "../store/actions/bank_accountAction";
import { Provider } from "react-redux";
import store from "../store/store";
import Otp from "./Otp";
import Input from "./Input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";
import OTP from "../pages/auth/OTP";
const MySwal = withReactContent(Swal);

function ModalFire() {
  const [customerName, setcustomerName] = useState("");
  const [trys, setTry] = useState(true);
  // const [phoneNumber, setPhoneNumber] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const loggedInuser = useSelector((state) => state.userProfile);
  console.log("Logged In User", loggedInuser);
  const customerName2 = useRef("");
  const [dependency, setdependency] = useState(false);
  const AccountListData = useSelector((state) => state.accountsList);
  const dispatch = useDispatch();
  const {
    bankAccounts,
    message,
    otpValue,
    accountMessage,
    criteriaValue,
    loading,
  } = AccountListData;

  const [otp1, setOpt1] = useState("");

  const otp2 = useRef("");
  const tokenInfo = useSelector((state) => state.userProfile);
  const { token } = tokenInfo;
  const user_token = jwtDecode(token);
  const merchant_id = user_token?.merchant_id;

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
    } else if (response.responseCode === 409 && response.response === "error") {
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
  useEffect(() => {
    console.log("try_this", otp1);
    otp1.length === 6 && setOpt1(otp1);
  }, [otp1, trys]);
  const readState = () => {
    return otp1;
  };
  const handleOtpSubmit = (values, res, reject, readState) => {
    console.log(
      otp2.current,
      dependency,
      values.phoneNumber,
      values,
      readState
    );
    BankAccountServices.confirmOtp(values.phoneNumber, otp2.current)
      .then((re) => {
        let accNo = "";
        let custName = "";

        const renderList = res[1].map((item, index) => (
          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="radio-2"
              className="radio radio-primary"
              value={item.accountNumber}
              onChange={(e) => {
                accNo = e.target.value;
                custName = item.accountTitle;
                // setAccountNumber(e.target.value)
                // setcustomerName(item.accountTitle)
                // console.log(e.target.value)
              }}
            />
            <label
              for="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              {item.accountNumber}
            </label>
            {/* <p>{item.accountTitle}</p> */}
          </div>
        ));
        MySwal.fire({
          title: "Choose Account",
          html: (
            <div className="">
              {renderList}
              {/* <button type="button" onClick={createAccount}>submit</button> */}
              <div className="col-span-2 mt-5">
                <button
                  type="button"
                  onClick={() => {
                    console.log("Heloo");
                    console.log("Acoount Number", accNo, custName);
                    dispatch(
                      createTutorial({
                        current: custName,
                        accountNumber: accNo,
                        bankName: "CBO",
                        merchant_id,
                        phone_number: values.phoneNumber,
                        interpretResponse,
                      })
                    );
                  }}
                  className="swal2-confirm swal2-styled btn-primary"
                >
                  submit
                </button>
              </div>
            </div>
          ),
          onClose: () => reject(),
          onCancel: () => Swal.close(),
          showConfirmButton: false,
          showCancelButton: false,
          confirmButtonColor: "#01AFEF",
        });
      })
      .catch((er) => {});
  };

  const showFormModal = (values) => {
    return new Promise((resolve, reject) => {
      const ValidationSchema = Yup.object().shape({
        phoneNumber: Yup.string().required("Phone Number is required"),
      });
      MySwal.fire({
        title: "Provide Phone Number",
        html: (
          <>
            <Formik
              initialValues={{ phoneNumber: "" }}
              validationSchema={ValidationSchema}
              isInitialValid={ValidationSchema.isValidSync(values)}
              onSubmit={(values) => {
                console.log("Values Are:", otp1);
                BankAccountServices.accountByPhone(values.phoneNumber)
                  .then((res) => {
                    console.log(res[0]);
                    if (res[0] == 200) {
                      BankAccountServices.sendOtp(values.phoneNumber)
                        .then((resp) => {
                          console.log(resp);
                        })
                        .catch((err) => {
                          console.log("Otp Service is Down");
                        });

                      MySwal.fire({
                        title: "",
                        html: (
                          <OTP
                            dispatch={dispatch}
                            setOpt1={setOpt1}
                            otp2={otp2}
                            onSubmit={(e) => {
                              e.preventDefault();
                              console.log("otp1: ", otp2.current);
                              handleOtpSubmit(values, res, reject, readState);
                            }}
                          ></OTP>
                        ),
                        onClose: () => reject(),
                        showConfirmButton: false,
                      });
                    } else {
                      Swal.fire({
                        icon: "error",
                        title: "No Account Found With This Phone Number",
                        showConfirmButton: false,
                        timer: 3000,
                      });
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              {(formik) => (
                <>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="grid gap-2 sm:grid-cols-5 sm:gap-6 sm:mb-5">
                      <div className="col-span-3">
                        <span className="text-sm link-error">
                          <ErrorMessage name="phoneNumber" />
                        </span>
                        <label
                          htmlFor="pno"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          name="phoneNumber"
                          id="phoneNumber"
                          value={formik.values.phoneNumber}
                          onChange={formik.handleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                          placeholder="0987654321"
                        />
                      </div>
                      <div className="col-span-2 mt-5">
                        <button
                          type="submit"
                          onClick={formik.handleSubmit}
                          className="swal2-confirm swal2-styled btn-primary"
                        >
                          verify
                        </button>
                      </div>
                    </div>
                    {/* <button
                      type="submit"
                      onSubmit={onSubmit}
                      className="swal2-confirm swal2-styled"
                    >
                      OK
                    </button>
                    <button
                      onClick={onCancel}
                      className="swal2-cancel swal2-styled"
                    >
                      Cancel
                    </button> */}
                  </form>
                </>
              )}
            </Formik>
          </>
        ),
        onClose: () => reject(),
        onCancel: () => Swal.close(),
        showConfirmButton: false,
        showCancelButton: false,
        confirmButtonColor: "#01AFEF",
      });
    });
  };

  const showModal = () => {
    showFormModal({
      name: "",
      url: "",
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
