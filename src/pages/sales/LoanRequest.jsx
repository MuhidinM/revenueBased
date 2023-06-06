import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { getInventoryDetail } from "../../store/actions/getInventoryAction";
import { Link } from "react-router-dom";

const columns = [
  //   {
  //     name: "Image",
  //     cell: (row) => {
  //       return (
  //         <div className="p-2">
  //           <img
  //             src={`http://192.168.14.245:5000/image/${row.item_pic}`}
  //             style={{ width: "40px", height: "40px" }}
  //             alt=""
  //           />
  //         </div>
  //       );
  //     },
  //   },
  {
    name: "national_id",
    selector: (row) => row.national_id,
    sortable: true,
  },
  {
    name: "Fist Name",
    selector: (row) => row.first_name,
    sortable: true,
  },
  {
    name: "Middle Name",
    selector: (row) => row.middle_name,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.last_name,
    sortable: true,
  },
  //   {
  //     name: "Customer Account",
  //     selector: (row) => row.customer_account,
  //     sortable: true,
  //   },
  {
    name: "Phone Number",
    selector: (row) => row.customer_phone_number,
    sortable: true,
  },
  {
    name: "Item",
    selector: (row) => row.item_id,
    sortable: true,
  },
  {
    name: "Loan Amount",
    selector: (row) => row.loan_amount,
    sortable: true,
  },
  {
    name: "Payment Term",
    selector: (row) => row.repayment_term,
    sortable: true,
  },
  {
    name: "Interest Rate",
    selector: (row) => row.interest_rate,
    sortable: true,
  },
  //   {
  //     name: "Created At",
  //     selector: (row) => new Date(row.createdAt).toISOString().split("T")[0],
  //     sortable: true,
  //   },
  {
    // name: "Created At",
    selector: (row) => (
      <div
        onClick={() => {
          // setLoanToApprove(row);
          // showKYCApproveModal(row);
        }}
        className="btn btn-outline  btn-xs w-24 btn-accent"
      >
        <Link
          to={`/sales/request-form?national_id=${row?.national_id}&first_name=${row?.first_name}&middle_name=${row?.middle_name}&last_name=${row?.last_name}&customer_account=${row?.customer_account}&customer_phone_number=${row?.customer_phone_number}&item_id=${row?.item_id}&loan_amount=${row?.loan_amount}&repayment_term=${row?.repayment_term}&interest_rate=${row?.interest_rate}`}
        >
          Proceed
        </Link>
      </div>
    ),
    sortable: true,
    width: "160px",
  },
];

const data = [
  {
    national_id: "1002",
    first_name: "Muhidin",
    middle_name: "Jemal",
    last_name: "Misbah",
    customer_account: "100024822",
    customer_phone_number: "0935252353",
    item_id: 2,
    loan_amount: 5000,
    repayment_term: 3,
    interest_rate: 5.0,
    createdAt: "10/02/2023",
  },
  {
    national_id: "1004",
    first_name: "Abdi",
    middle_name: "Jemal",
    last_name: "Tiruneh",
    customer_account: "1000251252",
    customer_phone_number: "0912512352",
    item_id: 1,
    loan_amount: 5000,
    repayment_term: 3,
    interest_rate: 5.0,
    createdAt: "10/02/2023",
  },
  {
    national_id: "1005",
    first_name: "Yared",
    middle_name: "Jemal",
    last_name: "Mesele",
    customer_account: "1000254252",
    customer_phone_number: "09852525225",
    item_id: 6,
    loan_amount: 5000,
    repayment_term: 3,
    interest_rate: 5.0,
    createdAt: "10/02/2023",
  },
];

function LoanRequest() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userProfile);
  // console.log(userData);
  const { userID } = userData;

  return (
    <>
      <div className="">
        <div className="grid gap-4 mt-4 md:grid-cols-12 justify-self-auto">
          <div className="col-span-12">
            <DataTable
              title="Requested Loans"
              columns={columns}
              data={data}
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

export default LoanRequest;
