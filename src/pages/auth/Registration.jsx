import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import AuthService from "../../services/auth.service";
// import { useState } from "react";
function Registration() {
  // const form = useRef();
  // const checkButton = useRef();

  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Fullname is required"),
    lastName: Yup.string().required("Fullname is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string().required("Phone is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    // acceptTerms: Yup.bool().oneOf([true], "Accept Terms"),
  });
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  password: "",
                  // confirmPassword: "",
                  confirmPassword: "",
                  // acceptTerms: false,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  // setTimeout(() => {
                  //   alert(JSON.stringify(values, null, 2));
                  //   setSubmitting(false);
                  // }, 400);
                  console.log(values);
                  AuthService.register(
                    values.firstName,
                    values.lastName,
                    values.email,
                    values.phone,
                    values.password.toString()
                  ).then(
                    (resp) => {
                      console.log(resp.message);
                      setMessage(resp.message);
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
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                          <div>
                            <label
                              htmlFor="fname"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              First Name
                            </label>
                            <span className="text-sm link-error">
                              {props.errors.firstName && props.touched.firstName
                                ? props.errors.firstName
                                : null}
                            </span>
                            <input
                              type="fname"
                              name="firstName"
                              id="fname"
                              value={props.values.firstName}
                              onChange={props.handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                              placeholder="Lelisa"
                              required=""
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="mname"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Middle Name
                            </label>
                            <span className="text-sm link-error">
                              {props.errors.lastName && props.touched.lastName
                                ? props.errors.lastName
                                : null}
                            </span>
                            <input
                              type="mname"
                              name="lastName"
                              id="mname"
                              value={props.values.lastName}
                              onChange={props.handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                              placeholder="Abdusemed"
                              required=""
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Business email
                          </label>
                          <span className="text-sm link-error">
                            {props.errors.email && props.touched.email
                              ? props.errors.email
                              : null}
                          </span>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={props.values.email}
                            onChange={props.handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                            placeholder="name@company.com"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Business Phone
                          </label>
                          <span className="text-sm link-error">
                            {props.errors.phone && props.touched.phone
                              ? props.errors.phone
                              : null}
                          </span>
                          <input
                            type="number"
                            name="phone"
                            id="phone"
                            value={props.values.phone}
                            onChange={props.handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                            placeholder="0900000000"
                            required=""
                            maxlength="9"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Password
                          </label>
                          <span className="text-sm link-error">
                            {props.errors.password && props.touched.password
                              ? props.errors.password
                              : null}
                          </span>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            value={props.values.password}
                            onChange={props.handleChange}
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="confirm-password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Confirm password
                          </label>
                          <span className="text-sm link-error">
                            {props.errors.confirmPassword && props.touched.confirmPassword
                              ? props.errors.confirmPassword
                              : null}
                          </span>
                          <input
                            type="password"
                            name="confirmPassword"
                            id="confirm-password"
                            value={props.values.confirmPassword}
                            onChange={props.handleChange}
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                            required=""
                          />
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="terms"
                              aria-describedby="terms"
                              type="checkbox"
                              value={props.values.confirmPassword}
                              onChange={props.handleChange}
                              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:ring-offset-gray-800"
                              required=""
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="terms"
                              className="font-light text-gray-500 dark:text-gray-300"
                            >
                              I accept the{" "}
                              <a
                                className="font-medium text-primary hover:underline dark:text-primary"
                                href="/"
                              >
                                Terms and Conditions
                              </a>
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          onClick={props.handleSubmit}
                          className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
                        >
                          Create an account
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Already have an account?{" "}
                          <a
                            href="/auth"
                            className="font-medium text-primary hover:underline dark:text-primary"
                          >
                            Login here
                          </a>
                        </p>
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
    </>
  );
}

export default Registration;
