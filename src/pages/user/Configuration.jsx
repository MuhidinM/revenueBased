import React from "react";
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSalesDetail } from "../../store/actions/getSalesAction";
import { useState } from "react";
import LoanConfigService from "../../services/loanConfig.service";
import { getLoanConfigDetail } from "../../store/actions/getLoanConfigAction";

function Configuration() {
  const userData = useSelector((state) => state.userProfile);
  // console.log(userData);
  const { userID } = userData;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userID) {
      dispatch(getLoanConfigDetail(userID));
    }
  }, [userID, dispatch]);

  const loanConfigData = useSelector((state) => state.loanConfigInfo);
  // console.log(userData);
  const { loanConfigDetail } = loanConfigData;

  const [isEdit, setIsEdit] = useState(false);

  const [data, setData] = useState({
    interest_rate: "",
    duration: "",
    merchant_id: userID,
  });

  const handleEdit = (row) => {
    setData({
      ...data,
      loan_conf_id: row.loan_conf_id,
      interest_rate: row.interest_rate,
      duration: row.duration,
      merchant_id: userID,
    });
    setIsEdit(true);
  };

  const columns = [
    {
      name: "Title",
      selector: (row) => row.interest_rate,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => row.duration,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => new Date(row.createdAt)?.toISOString().split("T")[0],
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <svg
          className="cursor-pointer h-6 w-6 text-orange-500"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          onClick={() => handleEdit(row)}
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
          <line x1="16" y1="5" x2="19" y2="8" />
        </svg>
      ),
      sortable: true,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      isEdit
        ? dispatch(LoanConfigService.EditLoanConfig(data))
        : dispatch(LoanConfigService.CreateLoanConfig(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="flex space-x-4 items-center">
          <div className="grid flex-grow gap-6 mb-4 grid-cols-4 sm:mb-5">
            <div className="w-full col-span-2">
              <label
                htmlFor="interest_rate"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Interest Rate
              </label>
              <span className="text-sm link-error">
                {/* <ErrorMessage name="interest_rate"></ErrorMessage> */}
              </span>
              <input
                type="number"
                name="interest_rate"
                id="interest_rate"
                placeholder="Lelisa"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data.interest_rate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full col-span-2">
              <label
                htmlFor="duration"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Duration
              </label>
              <span className="text-sm link-error">
                {/* <ErrorMessage name="duration"></ErrorMessage> */}
              </span>
              <input
                type="number"
                name="duration"
                id="duration"
                placeholder="Lelisa"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={data.duration}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="">
            <button
              type="submit"
              style={{ backgroundColor: "#01AFEF" }}
              className="swal2-confirm h-10 flex items-center swal2-styled"
            >
              {isEdit ? "Update" : "Register"}
            </button>
          </div>
        </form>
      </div>
      <DataTable
        columns={columns}
        data={loanConfigDetail}
        pagination
        persistTableHeadstriped
        highlightOnHover
      />
    </div>
  );
}

export default Configuration;
