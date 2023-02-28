import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function AgentComponent({ onSubmit, values, onCancel }) {
  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required("First Number is required"),
    url: Yup.string().required("Second Number is required"),
  });
  return (
    <>
      <Formik
        initialValues={values}
        validationSchema={ValidationSchema}
        isInitialValid={ValidationSchema.isValidSync(values)}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="w-full">
                <label
                  htmlFor="fname"
                  className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <span className="text-sm link-error"></span>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="Lelisa"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="lname"
                  className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <span className="text-sm link-error"></span>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="Chera"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <span className="text-sm link-error"></span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="sample@epay.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone
                </label>
                <span className="text-sm link-error"></span>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="0987654321"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              onSubmit={onSubmit}
              style={{ backgroundColor: "#01AFEF" }}
              className="swal2-confirm swal2-styled"
            >
              Register
            </button>
            <button onClick={onCancel} className="swal2-cancel swal2-styled">
              Cancel
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default AgentComponent;
