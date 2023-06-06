import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthService from "../../services/auth.service";
import { useDispatch } from "react-redux";
// import { PASSWORD } from "../../../../server/configs/db";
import { Formik } from "formik";
import souq from "../../assets/images/Souq.png";
import * as Yup from "yup";
function Login() {
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });
  let navigate = useNavigate();
  let dispatch = useDispatch();
  return (
    <>
      <div className="relative bg-black">
        <img
          src={souq}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity-30">
          <svg
            className="absolute inset-x-0 text-white dark:text-gray-900 -bottom-1"
            viewBox="0 0 1160 163"
          >
            <path
              fill="none"
              stroke="black"
              strokeWidth="2"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13"
            />
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>

          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12"></div>
              <div className="w-full max-w-xl xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10 dark:bg-gray-800">
                  <div className="space-y-4 md:space-y-4">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign in to your account
                    </h1>
                    <Formik
                      initialValues={{
                        username: "",
                        password: "",
                        // confirmPassword: "",
                        // acceptTerms: false,
                      }}
                      validationSchema={validationSchema}
                      onSubmit={(values) => {
                        // setTimeout(() => {
                        //   alert(JSON.stringify(values, null, 2));
                        //   setSubmitting(false);
                        // }, 400);
                        // console.log(values.email);

                        AuthService.login(
                          values.username,
                          values.password,
                          setMessage,
                          navigate,
                          dispatch
                        );
                      }}
                    >
                      {(props) => (
                        <>
                          <div>
                            <label
                              htmlFor="username"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Username
                            </label>
                            <span className="text-sm link-error">
                              {props.errors.username && props.touched.username
                                ? props.errors.password
                                : null}
                            </span>
                            <input
                              type="username"
                              name="username"
                              id="username"
                              value={props.values.username}
                              onChange={props.handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="username"
                              required=""
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
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              required=""
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="remember"
                                  aria-describedby="remember"
                                  type="checkbox"
                                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:ring-offset-gray-800"
                                  required=""
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="remember"
                                  className="text-gray-500 dark:text-gray-300"
                                >
                                  Remember me
                                </label>
                              </div>
                            </div>
                            <Link
                              to={"/auth/recover"}
                              className="text-sm font-medium text-primary hover:underline dark:text-primary"
                            >
                              Forgot password?
                            </Link>
                          </div>
                          <button
                            type="submit"
                            onClick={props.handleSubmit}
                            className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
                          >
                            Sign in
                          </button>
                          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet?
                            <Link
                              to={"/auth/registration"}
                              className="font-medium text-primary hover:underline dark:text-primary"
                            >
                              Sign up
                            </Link>
                          </p>
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
            </div>
          </div>
        </div>
      </div>
    </>
    // <>
    //   <section className="bg-gray-50 dark:bg-gray-900">
    //     <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    //       <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    //         <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

    //           <htmlForm className="space-y-4 md:space-y-6" action="#">
    //             <div>
    //               <label
    //                 htmlFor="email"
    //                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //               >
    //                 Your email
    //               </label>
    //               <input
    //                 type="email"
    //                 name="email"
    //                 id="email"
    //                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //                 placeholder="name@company.com"
    //                 required=""
    //               />
    //             </div>
    //             <div>
    //               <label
    //                 htmlFor="password"
    //                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //               >
    //                 Password
    //               </label>
    //               <input
    //                 type="password"
    //                 name="password"
    //                 id="password"
    //                 placeholder="••••••••"
    //                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //                 required=""
    //               />
    //             </div>
    //             <div className="flex items-center justify-between">
    //               <div className="flex items-start">
    //                 <div className="flex items-center h-5">
    //                   <input
    //                     id="remember"
    //                     aria-describedby="remember"
    //                     type="checkbox"
    //                     className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:ring-offset-gray-800"
    //                     required=""
    //                   />
    //                 </div>
    //                 <div className="ml-3 text-sm">
    //                   <label
    //                     htmlFor="remember"
    //                     className="text-gray-500 dark:text-gray-300"
    //                   >
    //                     Remember me
    //                   </label>
    //                 </div>
    //               </div>
    //               <Link
    //                 to="/auth/recover"
    //                 className="text-sm font-medium text-primary hover:underline dark:text-primary"
    //               >
    //                 Forgot password?
    //               </Link>
    //             </div>
    //             <Link
    //               to="/users"
    //               type="submit"
    //               className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
    //             >
    //               Sign in
    //             </Link>
    //             <p className="text-sm font-light text-gray-500 dark:text-gray-400">
    //               Don’t have an account yet?
    //               <Link
    //                 to="/auth/registration"
    //                 className="font-medium text-primary hover:underline dark:text-primary"
    //               >
    //                 Sign up
    //               </Link>
    //             </p>
    //           </htmlForm>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
  );
}

export default Login;
