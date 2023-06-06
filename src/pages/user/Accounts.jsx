import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Account Holder",
    selector: (row) => row.accountHolderName,
    sortable: true,
  },
  {
    name: "Account Number",
    selector: (row) => row.accountNumber,
    sortable: true,
  },
  {
    name: "Bank Name",
    selector: (row) => row.bankName,
    sortable: true,
  },
  {
    name: "Primary",
    selector: (row) => (row.primaryAccount == 1 ? "primary" : "secondary"),
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => (row.status == 1 ? "activated" : "pending"),
    sortable: true,
  },
];

// const MySwal = withReactContent(Swal);
function Accounts() {
  const [data, setData] = useState({
    accountNumber: "",
    accountHolder: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      data,
      [name]: value,
    });
  };
  return (
    <>
      <div className="grid gap-4 md:grid-cols-12 justify-self-auto">
        <div className="col-span-12">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-12">
            <div className="col-span-9 mt-6">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-2 sm:grid-cols-6 sm:gap-6 sm:mb-5">
                  <div className="col-span-2">
                    <span className="text-sm link-error"></span>
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
                      value={data.accountNumber}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="account number"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <span className="text-sm link-error"></span>
                    <label
                      htmlFor="pno"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Account Holder Name
                    </label>
                    <input
                      type="text"
                      name="accountHolder"
                      id="accountHolder"
                      value={data.accountHolder}
                      // onChange={h}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="Name"
                      disabled
                    />
                  </div>
                  <div className="col-span-2 mt-5">
                    {data?.accountHolder?.length > 0 ? (
                      <button
                        type="submit"
                        className="swal2-confirm swal2-styled btn-primary"
                      >
                        Submit
                      </button>
                    ) : (
                      <button
                        // type="submit"
                        onClick={() =>
                          setData({
                            ...data,
                            accountHolder: "Yared Mesele Tefera",
                          })
                        }
                        className="swal2-confirm swal2-styled btn-primary text-xl"
                      >
                        verify
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
            {/* <div className="col-span-3">
              <Selectinput
                arr={[]}
                id="choose"
                name="choose"
                handleChange={handleChange}
                title="Choose Primary"
              />
            </div> */}
          </div>

          <div className="mt-4 overflow-x-auto">
            <DataTable
              title="Account List"
              columns={columns}
              data={[]}
              pagination
              // paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
              subHeader
              // subHeaderComponent={subHeaderComponentMemo}
              // selectableRows
              persistTableHeadstriped
              highlightOnHover
              // actions={actionsMemo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Accounts;
