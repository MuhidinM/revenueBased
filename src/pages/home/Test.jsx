import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Input from "../../components/Input";
const MySwal = withReactContent(Swal);

const test = () => {
  const showFormModal = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "Add Account",
        html: (
          <>
            <div className="grid gap-2 sm:grid-cols-5 sm:gap-6 sm:mb-5">
              <div className="col-span-3">
                <Input
                  label="pno"
                  title="Phone Number"
                  type="number"
                  name="pno"
                  id="pno"
                  place="0987654321"
                  // value={formik.values.accountNumber}
                  // handleChange={formik.handleChange}
                  // fetchName={queryCustomerName}
                  //   handleChange={handleChange}
                />
              </div>
              <div className="col-span-2 mt-5">
                <button
                  type="submit"
                  // onSubmit={onSubmit}
                  className="swal2-confirm swal2-styled btn-primary"
                >
                  verify
                </button>
              </div>
            </div>
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

  const showFormModalch = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "Choose Account",
        html: (
          <div className="">
            
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 checkbox checkbox-primary border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                1022200133436
              </label>
            </div>
          </div>
        ),
        onClose: () => reject(),
        onCancel: () => Swal.close(),
        showConfirmButton: false,
        showCancelButton: false,
        confirmButtonColor: "#01AFEF",
      });
    });
  };

  const showModalch = () => {
    showFormModalch({
      name: "",
      url: "",
    })
      .then((values) => console.log(values))
      .catch(() => console.log("Modal closed"));
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <button
            type="button"
            className="mb-4 btn btn-outline btn-primary"
            onClick={showModal}
          >
            Add Account
          </button>
          <button
            type="button"
            className="mb-4 btn btn-outline btn-primary"
            onClick={showModalch}
          >
            Choose Account
          </button>
        </div>
      </section>
    </>
  );
};

export default test;
