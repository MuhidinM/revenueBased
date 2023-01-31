import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import PaymentServices from "../services/payment.service";
function Bankpay() {
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  const validationSchema = Yup.object().shape({
    accountHolder: Yup.string().required("Account Holder Name is required"),
    accountNumber: Yup.string().required("Account Number is required"),
    bankName: Yup.string().required("You Have to select Bank"),
  });
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <img
                className="w-full h-auto"
                src="https://d6vdma9166ldh.cloudfront.net/media/images/1540976335764-pasted%20image%200.png"
                alt="front credit card"
              />
              <div className="flex flex-col items-center justify-center">
                <ul className="flex">
                  <li className="mx-2">
                    <img
                      className="w-16"
                      src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                      alt=""
                    />
                  </li>
                  <li className="ml-5">
                    <img
                      className="w-9"
                      src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                      alt=""
                    />
                  </li>
                </ul>
              </div>

              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Card payment
              </h1>
              <Formik
                initialValues={{
                  debitAccount: "",
                  debitAmount: "",
                  // bankName: "",
                }}
                // validationSchema={validationSchema}
                onSubmit={(values) => {
                  // setTimeout(() => {
                  //   alert(JSON.stringify(values, null, 2));
                  //   setSubmitting(false);
                  // }, 400);
                  console.log("hello");
                  console.log(values);
                  PaymentServices.pay(
                    values.debitAccount,
                    values.debitAmount
                  ).then(
                    (resp) => {
                      console.log(resp);
                      setMessage(resp);
                      setSuccessful(true);
                      // console.log(successful);
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
                    {!successful && (
                      <>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                          <div>
                            {/* <span className="text-sm link-error">
                              {props.errors.cardholder &&
                              props.touched.cardholder
                                ? props.errors.cardholder
                                : null}
                            </span> */}
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
                          {/* <div>
                            <span className="text-sm link-error">
                              {props.errors.cardNumber &&
                              props.touched.cardNumber
                                ? props.errors.cardNumber
                                : null}
                            </span>
                            <input
                              type="text"
                              name="cardNumber"
                              id="cardNumber"
                              placeholder="0000 0000 0000 0000"
                              className="bg-gray-50 border
            border-gray-300 text-gray-900 sm:text-sm rounded-lg
            focus:ring-primary focus:border-primary block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              required=""
                              value={props.values.accountNumber}
                              onChange={props.handleChange}
                            />
                          </div> */}
                          {/* <div className="flex flex-col my-3">
                            <div className="mb-2">
                              <label htmlFor="" className="text-gray-700">
                                Expired
                              </label>
                            </div>
                            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                              <span className="text-sm link-error">
                                {props.errors.selected_date &&
                                props.touched.selected_date
                                  ? props.errors.selected_date
                                  : null}
                              </span>
                              <select
                                name="selected_date"
                                id="selected_date"
                                value={props.values.selected_date}
                                onChange={props.handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                x-model="expired.month"
                              >
                                <option value="" selected disabled>
                                  MM
                                </option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                              </select>
                              <select
                                name="selectYear"
                                id="selectYear"
                                value={props.values.selectYear}
                                onChange={props.handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                x-model="expired.year"
                              >
                                <option value="" selected disabled>
                                  YY
                                </option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                              </select>
                              <div className="w-full col-span-2">
                                <h1 className="mt-2 text-lg font-bold text-center">
                                  $100
                                </h1>
                              </div>
                            </div>
                          </div> */}
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
                            successful
                              ? "alert alert-success"
                              : "alert alert-danger"
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bankpay;
