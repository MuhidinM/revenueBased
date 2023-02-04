import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import Selectinput from "./Selectinput";

const dropdown = [
  { label: "CBE-1000003656654", value: "1" },
  { label: "CBO-1022225648986", value: "2" },
];

const expiryDate = [
  { label: "15 day", value: "15" },
  { label: "1-Month", value: "30" },
  { label: "2-Month", value: "60" },
  { label: "3-Month", value: "90" },
];

const ValidationSchema = Yup.object().shape({
  accountHolder: Yup.string().required("Account Holder Name is required"),
  accountNumber: Yup.string().required("Account Number is required"),
  bankName: Yup.string().required("You Have to select Bank"),
});

export const ModalForm = ({ values, onSubmit, onCancel }) => {
  return (
    <Formik
      initialValues={values}
      validationSchema={ValidationSchema}
      isInitialValid={ValidationSchema.isValidSync(values)}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div>
              <Selectinput arr={dropdown} id="account" title="Choose Account" />
            </div>
            <div>
              <Selectinput
                arr={expiryDate}
                id="expiry-date"
                title="Set Expiry Date"
              />
            </div>

            <div className="flex items-center space-x-4">
              <button
                type="submit"
                onSubmit={onSubmit}
                className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
              >
                Generate
              </button>
              <button onClick={onCancel} className="swal2-cancel swal2-styled">
                Cancel
              </button>
            </div>
          </div>

          {/* <button
            type="submit"
            onSubmit={onSubmit}
            className="swal2-confirm swal2-styled"
          >
            OK
          </button> */}
        </form>
      )}
    </Formik>
  );
};
