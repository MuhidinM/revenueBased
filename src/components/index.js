import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import { useDispatch, useSelector } from "react-redux";
// import AuthService from "../services/auth.service";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
const MySwal = withReactContent(Swal);

function ModalFire() {
  const [accountDetail, setAccountDetail] = useState("");
  const showFormModal = (values) => {
    return new Promise((resolve, reject) => {
      const ValidationSchema = Yup.object().shape({
        accountNumber: Yup.string().required("Phone Number is required"),
      });
      MySwal.fire({
        title: "Add Account",
        html: (
          <>
            <Formik
              initialValues={{ accountNumber: "" }}
              validationSchema={ValidationSchema}
              isInitialValid={ValidationSchema.isValidSync(values)}
              onSubmit={(values) => {
                console.log("Values Are:", values);
                setAccountDetail("Yared Mesele Tefera");
              }}
            >
              {(formik) => (
                <>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="grid gap-2 sm:grid-cols-5 sm:gap-6 sm:mb-5">
                      <div className="col-span-3">
                        <span className="text-sm link-error">
                          <ErrorMessage name="accountNumber" />
                        </span>
                        <label
                          htmlFor="pno"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Account Number
                        </label>
                        <input
                          type="number"
                          name="accountNumber"
                          id="accountNumber"
                          value={formik.values.accountNumber}
                          onChange={formik.handleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                          placeholder="account number"
                        />
                      </div>
                      <div className="col-span-2 mt-5">
                        {accountDetail.length > 0 ? (
                          <button
                            // type="submit"
                            onClick={formik.handleSubmit}
                            className="swal2-confirm swal2-styled btn-primary"
                          >
                            Submit
                          </button>
                        ) : (
                          <button
                            // type="submit"
                            onClick={() =>
                              setAccountDetail("Yared Mesele Tefera")
                            }
                            className="swal2-confirm swal2-styled btn-primary"
                          >
                            verify
                          </button>
                        )}
                      </div>
                      {accountDetail && (
                        <div className="col-span-3">{accountDetail}</div>
                      )}
                    </div>
                  </form>
                </>
              )}
            </Formik>
          </>
        ),
        onClose: () => reject(),
        onCancel: () => Swal.close(),
        showConfirmButton: false,
        showCancelButton: false,
        confirmButtonColor: "#01AFEF",
      });
    });
  };

  const showModal = () => {
    showFormModal({
      name: "",
      url: "",
    })
      .then((values) => console.log(values))
      .catch(() => console.log("Modal closed"));
  };

  return (
    <button
      type="button"
      className="mb-4 btn btn-outline btn-primary"
      onClick={showModal}
    >
      Add New Account
    </button>
  );
}

export default ModalFire;
