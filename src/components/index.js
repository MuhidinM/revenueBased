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
import Input from "./Input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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

  // const showFormModal = (values) => {
  //   return new Promise((resolve, reject) => {
  //     MySwal.fire({
  //       title: "ADD ACCOUNTS",
  //       html: (
  //         <Provider store={store}>
  //           <ModalForm
  //             values={values}
  //             // sendNameToParent={sendNameToParent}
  //             onSubmit={(values) => {
  //               console.log("Hello");
  //               console.log(values);
  //               // let crtVal = getcriterialVal();
  //               // console.log(crtVal);
  //               const {
  //                 bankAccounts,
  //                 message,
  //                 accountMessage,
  //                 criteriaValue,
  //                 loading,
  //               } = AccountListData;

  //               console.log("Criteria Value 2 " + customerName2.current);
  //               // console.log("Id is" + currentUser.id);
  //               // console.log(customerName);
  //               // dispatch(
  //               //   createTutorial(
  //               //     customerName2.current,
  //               //     values.accountNumber,
  //               //     values.bankName,
  //               //     currentUser.id
  //               //   )
  //               // );

  // const value = {
  //   first: "",
  //   second: "",
  //   third: "",
  //   fourth: "",
  //   fifth: "",
  //   sixth: "",
  // };

  //               BankAccountServices.sendOtp("0925825012").then((res) => {
  //                 MySwal.fire({
  //                   title: "",
  //                   html: (
  //                     <Otp
  //                       values={value}
  //                       onSubmit={(values1) => {
  //                         console.log("Hello from the second swal");
  //                         resolve(values);
  //                         console.log(values.first);
  //                         const otp =
  //                           values1.first +
  //                           values1.second +
  //                           values1.third +
  //                           values1.fourth +
  //                           values1.fifth +
  //                           values1.sixth;

  //                         const confirmedOtp = BankAccountServices.confirmOtp(
  //                           "0925825012",
  //                           otp
  //                         ).then((res) => {
  //                           console.log("creating account");
  //                           if (res.status === "success") {
  //                             console.log("success is responded");
  //                             console.log(criteriaValue);
  //                             dispatch(
  //                               createTutorial({
  //                                 current: customerName2.current,
  //                                 accountNumber: values.accountNumber,
  //                                 bankName: values.bankName,
  //                                 id: currentUser.user.user_id,
  //                                 interpretResponse,
  //                               })
  //                             );
  //                           }
  //                         });
  //                       }}
  //                     ></Otp>
  //                   ),
  //                   onClose: () => reject(),
  //                   showConfirmButton: false,
  //                 });
  //               });
  //               resolve(values);

  //               MySwal.close();
  //               Swal.close();
  //             }}
  //             onCancel={() => {
  //               Swal.close();
  //             }}
  //           />
  //         </Provider>
  //       ),

  //       onClose: () => reject(),
  //       showConfirmButton: false,
  //     });
  //   });
  // };

  // const showModal = () => {
  //   showFormModal({
  //     accountNumber: "",
  //     bankName: "",
  //   })
  //     .then((values) => console.log(values))
  //     .catch(() => console.log("Modal closed"));
  // };

  const showFormModal = (values) => {
    return new Promise((resolve, reject) => {
      const ValidationSchema = Yup.object().shape({
        phoneNumber: Yup.string().required("Phone Number is required"),
      });
      MySwal.fire({
        title: "Add Account",
        html: (
          <>
            <Formik
              initialValues={{ phoneNumber: "" }}
              validationSchema={ValidationSchema}
              isInitialValid={ValidationSchema.isValidSync(values)}
              onSubmit={(values) => {
                // console.log("Values Are:", values);

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
                        )
                          .then((res) => {
                            console.log("creating account");
                            if (res.status === "success") {
                              console.log("success is responded");
                              console.log(criteriaValue);

                              // dispatch(
                              //   createTutorial({
                              //     current: customerName2.current,
                              //     accountNumber: values.accountNumber,
                              //     bankName: values.bankName,
                              //     id: currentUser.user.user_id,
                              //     interpretResponse,
                              //   })
                              // );
                            }
                          })
                          .catch((err) => {
                            const bankAccounts = [1, 2];
                            const renderList = bankAccounts.map(
                              (item, index) => (
                                <div class="flex items-center mb-4">
                                  <input
                                    id="default-checkbox"
                                    type="checkbox"
                                    value=""
                                    class="w-4 h-4 checkbox checkbox-primary border-gray-300 rounded"
                                  />
                                  <label
                                    for="default-checkbox"
                                    class="ml-2 text-sm font-medium text-gray-900"
                                  >
                                    {item}
                                  </label>
                                </div>
                              )
                            );

                            MySwal.fire({
                              title: "Choose Account",
                              html: <div className="">{renderList}</div>,
                              onClose: () => reject(),
                              onCancel: () => Swal.close(),
                              showConfirmButton: false,
                              showCancelButton: false,
                              confirmButtonColor: "#01AFEF",
                            });
                          });
                      }}
                    ></Otp>
                  ),
                  onClose: () => reject(),
                  showConfirmButton: false,
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
