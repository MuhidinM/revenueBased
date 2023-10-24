import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Addressproof from "../../components/Addressproof";
import Selectinput from "../../components/Selectinput";

const category = [
  { label: "A", value: "A" },
  { label: "B", value: "B" },
];

const status = [
  { label: "Paid", value: "Paid" },
  { label: "Un Paid", value: "Un Paid" },
];
const AddExpense = ({ onSubmit, values, onCancel }) => {
  const FILE_SIZE = 1600 * 1024;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];
  const ValidationSchema = Yup.object().shape({
    picture: Yup.mixed()
      .required("A file is required")
      .test(
        "fileSize",
        "File too large",
        (value) => value && value.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
    expense_name: Yup.string().required("Name is required"),
    expense_amount: Yup.string().required("Amount is required"),
    expense_date: Yup.string().required("Date is required"),
    expense_category: Yup.string().required("Category is required"),
    description: Yup.string().required("Discription is required"),
    status: Yup.string().required("Status is required"),
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
              <div className="w-full">
                <label
                  htmlFor="expense_name"
                  className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <span className="text-sm link-error">
                  <ErrorMessage name="expense_name"></ErrorMessage>
                </span>
                <input
                  type="text"
                  name="expense_name"
                  id="expense_name"
                  placeholder="Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formik.values.expense_name}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="expense_amount"
                  className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Amount
                </label>
                <span className="text-sm link-error">
                  <ErrorMessage name="expense_amount"></ErrorMessage>
                </span>
                <input
                  type="text"
                  name="expense_amount"
                  id="expense_amount"
                  placeholder="1025.63"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formik.values.expense_amount}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="expense_date"
                  className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date
                </label>
                <span className="text-sm link-error">
                  <ErrorMessage name="expense_date"></ErrorMessage>
                </span>
                <input
                  type="date"
                  name="expense_date"
                  id="expense_date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formik.values.expense_date}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="w-full">
                <span className="text-sm link-error">
                  <ErrorMessage name="expense_category"></ErrorMessage>
                </span>
                <Selectinput
                  arr={category}
                  id="expense_category"
                  name="expense_category"
                  value={formik.values.expense_category}
                  onChange={formik.handleChange}
                  title="Category"
                />
              </div>
              <div className="w-full">
                <span className="text-sm link-error">
                  <ErrorMessage name="status"></ErrorMessage>
                </span>
                <Selectinput
                  arr={status}
                  id="status"
                  name="status"
                  value={formik.values.status}
                  onChange={formik.handleChange}
                  title="Status"
                />
              </div>
              <div className="sm:col-span-2">
                <Addressproof
                  lable="picture"
                  id="picture"
                  title="Item Image"
                  name="picture"
                  fileInput={(e) => {
                    formik.setTouched({
                      picture: true,
                    });
                    formik.setFieldValue("picture", e.target.files[0]);
                  }}
                  value={formik.values.picture}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={onCancel}
              className="swal2-cancel swal2-styled"
            >
              Cancel
            </button>
            <button
              type="submit"
              // onSubmit={onSubmit}
              style={{ backgroundColor: "#01AFEF" }}
              className="swal2-confirm swal2-styled"
            >
              Register
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddExpense;
