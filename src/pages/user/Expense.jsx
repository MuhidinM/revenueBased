import React from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import UserService from "../../services/user.service";
import { useState } from "react";
import AddExpense from "./AddExpense";

const MySwal = withReactContent(Swal);

const columns = [
  {
    name: "Sales Id",
    selector: (row) => row.sales_id,
    sortable: true,
  },
  {
    name: "First Name",
    selector: "firstName",
    sortable: true,
  },
  {
    name: "Last Name",
    selector: "lastName",
    sortable: true,
  },
  {
    name: "Username",
    selector: (row) =>
      row.phone_number ? row.phone_number : row.email_address,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.emailStatus,
    sortable: true,
  },
];

const Expense = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("registered");

  const showFormModalSales = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "Expense Detail",
        html: (
          <AddExpense
            values={values}
            onSubmit={(values) => {
              dispatch(
                UserService.CreateSales(
                  
                )
                  .then(
                    (response) =>
                      response &&
                      Swal.fire({
                        icon: "success",
                        title: "Expense Created Successfully",
                        showConfirmButton: false,
                        timer: 3000,
                      })
                  )
                  .catch(
                    (error) =>
                      error &&
                      Swal.fire({
                        icon: "error",
                        title: `Something went wrong`,
                        showConfirmButton: false,
                        timer: 3000,
                      })
                  )
              );
            }}
            onCancel={() => MySwal.close()}
          />
        ),
        onClose: () => reject(),
        onCancel: () => Swal.close(),
        showConfirmButton: false,
        showCancelButton: false,
        confirmButtonColor: "#01AFEF",
      });
    });
  };

  const showModalSales = () => {
    showFormModalSales({
      expense_name: "",
      expense_amount: "",
      expense_date: "",
      expense_category: "",
      paymentMethod: "",
      expense_receipURL: [],
      description: "",
      status: "",
      item_id: "",
    })
      .then((values) => console.log(values))
      .catch(() => console.log("Modal closed"));
  };

  return (
    <div>
      <button
        type="button"
        className="mb-4 btn btn-outline btn-primary"
        onClick={showModalSales}
      >
        Add Expense
      </button>
      <div className="tabs tabs-boxed">
        <span
          className={`tab ${activeTab === "registered" && "tab-active"}`}
          onClick={() => setActiveTab("registered")}
          style={{
            color: activeTab === "registered" ? "white" : null,
            backgroundColor: activeTab === "registered" ? "#01BBF2" : null,
          }}
        >
          Expenses
        </span>
      </div>
      <DataTable
        columns={columns}
        // data={}
        pagination
        persistTableHeadstriped
        highlightOnHover
      />
    </div>
  );
};

export default Expense;
