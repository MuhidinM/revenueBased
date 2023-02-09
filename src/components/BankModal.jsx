import React from "react";
import Input from "./Input";
import Selectinput from "./Selectinput";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const dropdown = [
  { label: "", value: "" },
  { label: "CBO-1", value: "1" },
  { label: "EBirr", value: "2" },
  { label: "Awash", value: "3" },
  { label: "Zemen", value: "4" },
  { label: "Enat", value: "5" },
];
const ValidationSchema = Yup.object().shape({
  bankName: Yup.string().required("Bank Nameis required"),
  bankCode: Yup.string().required("You Have to Provide Bank Code"),
});
function BankModal({ values, onSubmit, onCancel }) {
  console.log(values);
  return (
    <>
      <Formik
        initialValues={values}
        validationSchema={ValidationSchema}
        isInitialValid={ValidationSchema.isValidSync(values)}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <>
            <section className="bg-white dark:bg-gray-900">
              <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                <form onSubmit={formik.handleSubmit}>
                  <div className="flex items-center space-x-4">
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                      <div className="w-full">
                        <Input
                          label="name"
                          title="Bank Name"
                          type="text"
                          name="bankName"
                          id="bankName"
                          place="Bank Name"
                          value={formik.values.bankName}
                          handleChange={formik.handleChange}
                        />
                      </div>
                      <div className="w-full">
                        <Input
                          label="name"
                          title="Bank Code"
                          type="text"
                          name="bankCode"
                          id="bankCode"
                          place="Bank Code"
                          value={formik.values.bankCode}
                          handleChange={formik.handleChange}
                        />
                      </div>
                      <button
                        type="submit"
                        onSubmit={onSubmit}
                        className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </>
        )}
      </Formik>

      {/* <div className="">
        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              {props.title}
            </h2>
            <htmlForm action="#">
              <div className="flex items-center space-x-4"></div>
            </htmlForm>
          </div>
        </section>
      </div> */}
    </>
  );
}

export default BankModal;
