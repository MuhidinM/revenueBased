import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PaymentServices from "../services/payment.service";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Otp from "./Otp";
import BankAccountServices from "../../src/services/bank-account.services";
import queryString from "query-string";
const MySwal = withReactContent(Swal);
function Bankpay() {
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [verified, setVerified] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const clientid = searchParams.get("secretKey");
  const secretKey = searchParams.get("secretKey");
  const key = searchParams.get("key");
  const amount = searchParams.get("amount");
  const callBackUrl = searchParams.get("callBackUrl");
  console.log(clientid, secretKey, amount);
  useEffect(() => {}, []);
  const validationSchema = Yup.object().shape({
    accountHolder: Yup.string().required("Account Holder Name is required"),
    accountNumber: Yup.string().required("Account Number is required"),
    bankName: Yup.string().required("You Have to select Bank"),
  });

  const PinvalidationSchema = Yup.object().shape({
    phoneNumber: Yup.string().required("Phone Number is required"),
    pin: Yup.string().required("Pin is required"),
    // bankName: Yup.string().required("You Have to select Bank"),
  });

  const changeState = () => {
    setVerified(true);
  };
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/epass");
  };
  const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
  `;
  return (
    <>
      {verified === 0 ? (
        // console.log("rendering first Condition")
        <>
          <Formik
            initialValues={{
              phoneNumber: "",
              pin: "",
              // bankName: "",
            }}
            validationSchema={PinvalidationSchema}
            onSubmit={(values) => {
              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2));
              //   setSubmitting(false);
              // }, 400);
              console.log("hello");
              console.log(values);
              PaymentServices.verifyPin(values.phoneNumber, values.pin).then(
                (resp) => {
                  console.log(resp);
                  setMessage(resp[0]);
                  // setSuccessful(true);
                  if ((resp[0] = "success")) {
                    setVerified(1);
                  }
                },
                (error) => {
                  const resMessage =
                    (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                    error.message ||
                    error.toString();

                  setMessage(resMessage);
                  setSuccessful(false);
                }
              );
            }}
          >
            {(props) => (
              <>
                <div>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                    <div className="w-full col-span-3">
                      <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Phone Number"
                        // required=""
                        value={props.values.phoneNumber}
                        onChange={props.handleChange}
                      />
                    </div>
                    <div className="w-full col-span-2">
                      <input
                        type="text"
                        name="pin"
                        id="pin"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Pin"
                        value={props.values.pin}
                        onChange={props.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    // href="/otp"
                    type="submit"
                    // onClick={changeState}
                    onClick={props.handleSubmit}
                    className="w-1/2 text-white rounded-md swal2-styled bg-primary"
                  >
                    Verify
                  </button>
                  <button
                    className="w-1/2 text-white rounded-md swal2-styled bg-primary"
                    onClick={handleClick}
                  >
                    SignUp
                  </button>
                </div>
              </>
            )}
          </Formik>
        </>
      ) : (
        <Formik
          initialValues={{
            debitAccount: "",
            // debitAmount: "",
            // bankName: "",
          }}
          // validationSchema={validationSchema}
          onSubmit={(val) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
            console.log("hello");
            console.log(val);

            BankAccountServices.sendOtp("+251927355418");
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
                    // resolve(values);
                    const otp =
                      values.first +
                      values.second +
                      values.third +
                      values.fourth +
                      values.fifth +
                      values.sixth;
                    BankAccountServices.confirmOtp("+251927355418", otp).then(
                      (res) => {
                        // dispatch(setPrimaryAccount(e.target.value));
                        console.log(val.debitAccount);
                        PaymentServices.pay(
                          val.debitAccount,
                          amount,
                          clientid,
                          secretKey,
                          key
                        ).then(
                          (resp) => {
                            console.log(resp);
                            setMessage(resp[0]);
                            setSuccessful(true);
                            // setTimeout(3000)
                            // if (resp[0]) {

                            // }
                            if (resp[0] === "Success") {
                              window.opener.postMessage(resp[0], callBackUrl);
                              window.opener.focus();
                              window.close();
                            } else {
                              window.opener.postMessage(resp[0], callBackUrl);
                              window.opener.focus();
                              window.close();
                            }
                          },
                          (error) => {
                            const resMessage =
                              (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                              error.message ||
                              error.toString();

                            setMessage(resMessage);
                            setSuccessful(false);
                          }
                        );
                      }
                    );
                  }}
                  onCancel={() => MySwal.close()}
                ></Otp>
              ),

              // onClose: () => reject(),
              showConfirmButton: false,
            });
          }}
        >
          {(props) => (
            <>
              {!successful && (
                <>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                    <div className="w-full col-span-3">
                      <input
                        type="text"
                        name="debitAccount"
                        id="debitAccount"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Account Number"
                        // required=""
                        value={props.values.debitAccount}
                        onChange={props.handleChange}
                      />
                    </div>
                    <div className="w-full col-span-2">
                      <input
                        type="text"
                        name="debitAmount"
                        id="debitAmount"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Amount"
                        required=""
                        value={props.values.debitAmount}
                        onChange={props.handleChange}
                      />
                    </div>
                  </div>
                  <button
                    // href="/otp"
                    type="submit"
                    onClick={props.handleSubmit}
                    className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
                  >
                    Pay now
                  </button>
                </>
              )}
              {message && (
                <div className="form-group">
                  <div
                    className={
                      successful ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
            </>
          )}
        </Formik>
      )}
    </>
  );
}

export default Bankpay;
