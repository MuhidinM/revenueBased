import React from "react";
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSalesDetail } from "../../store/actions/getSalesAction";
import { useState } from "react";
import LoanConfigService from "../../services/loanConfig.service";
import { getLoanConfigDetail } from "../../store/actions/getLoanConfigAction";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
];

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

  const [data, setData] = useState({
    interest_rate: "",
    duration: "",
    merchant_id: userID,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoanConfigService.CreateLoanConfig(data));
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
              Register
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
