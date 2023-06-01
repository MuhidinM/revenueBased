import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";

const AssignLoan = ({ onSubmit, values, onCancel }) => {
  const ValidationSchema = Yup.object().shape({
    item_id: Yup.string().required("Item is required"),
    loan_id: Yup.string().required("Sales is required"),
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
            <div className="grid gap-4 mb-4 grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="">
                <label
                  htmlFor="phone"
                  className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Item
                </label>
                <span className="text-sm link-error">
                  <ErrorMessage name="role" />
                </span>
                <select
                  name="roleName"
                  value={formik.values.item_id}
                  onChange={formik.handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled selected>
                    Select Item
                  </option>
                  <option value="Admin">S21</option>
                  <option value="Approval">A32</option>
                </select>
              </div>
              <div className="">
                <label
                  htmlFor="phone"
                  className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sales
                </label>
                <span className="text-sm link-error">
                  <ErrorMessage name="role" />
                </span>
                <select
                  name="loan"
                  value={formik.values.loan_id}
                  onChange={formik.handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled selected>
                    Select Loan
                  </option>
                  <option value="5033">
                    50% of the price for 3% interst in 3 month{" "}
                  </option>
                  <option value="5043">
                    100% of the price for 4% interst in 3 month{" "}
                  </option>
                </select>
              </div>
            </div>

            <button onClick={onCancel} className="swal2-cancel swal2-styled">
              Cancel
            </button>
            <button
              type="submit"
              onSubmit={onSubmit}
              style={{ backgroundColor: "#01AFEF" }}
              className="swal2-confirm swal2-styled"
            >
              Assign
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AssignLoan;
