import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

function AddSales({ onSubmit, values, onCancel }) {
  const ValidationSchema = Yup.object().shape({
    username: Yup.string().required("username is required"),
  });
  // console.log("value From the Parent:", values);
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
            <div className="grid gap-4 mb-4 sm:grid-cols-1 sm:gap-6 sm:mb-5">
              <div className="w-full">
                <label
                  htmlFor="username"
                  className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <span className="text-sm link-error">
                  <ErrorMessage name="username"></ErrorMessage>
                </span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Valid email or Phone Number"
                  className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formik.values.username}
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

export default AddSales;
