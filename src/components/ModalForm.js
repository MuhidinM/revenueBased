import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import Selectinput from "./Selectinput";
import BankServices from "../services/bank.services";

const ValidationSchema = Yup.object().shape({
  accountHolder: Yup.string().required("Account Holder Name is required"),
  accountNumber: Yup.string().required("Account Number is required"),
  bankName: Yup.string().required("You Have to select Bank"),
});

export const ModalForm = ({ values, onSubmit, onCancel }) => {
  const [currentBank, setCurrentUser] = useState({});
  const dropdown = [];
  if (currentBank instanceof Array) {
    currentBank.map((item, index) =>
      dropdown.push({ label: item.bankName, value: item.bankCode })
    );
  }

  useEffect(() => {
    const bank = BankServices.getBank().then((res) => {
      setCurrentUser(res);
    });
    // console.log("our", bank);
  }, []);
  console.log(currentBank);
  return (
    <Formik
      initialValues={values}
      validationSchema={ValidationSchema}
      isInitialValid={ValidationSchema.isValidSync(values)}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                <span className="text-sm link-error">
                  <ErrorMessage name="accountHolder" />
                </span>
                <Input
                  label="accholder"
                  title="Account Holder"
                  type="text"
                  name="accountHolder"
                  id="accountHolder"
                  place="Hunda Temam Biniam"
                  value={formik.values.accountHolder}
                  handleChange={formik.handleChange}
                />
              </div>
              <div className="w-full">
                <span className="text-sm link-error">
                  <ErrorMessage name="accountHolder" />
                </span>
                <Input
                  label="accno"
                  title="Account Number"
                  type="text"
                  name="accountNumber"
                  id="accountNumber"
                  place="1022225648986"
                  value={formik.values.accountNumber}
                  handleChange={formik.handleChange}
                  //   handleChange={handleChange}
                />
              </div>
              <div>
                <span className="text-sm link-error">
                  <ErrorMessage name="accountHolder" />
                </span>
                <Selectinput
                  arr={dropdown}
                  id="bankName"
                  name="bankName"
                  title="Choose Bank"
                  value={values.bankName}
                  handleChange={formik.handleChange}
                />
              </div>
            </div>
            <button
              type="submit"
              onSubmit={onSubmit}
              className="swal2-confirm swal2-styled"
            >
              OK
            </button>
          </form>
          <button onClick={onCancel} className="swal2-cancel swal2-styled">
            Cancel
          </button>
        </>
      )}
    </Formik>
    //   render={({ isValid }) => {
    //     return (
    //       <Form>

    //       </Form>
    //     );
    //   }}
    // />
  );
};