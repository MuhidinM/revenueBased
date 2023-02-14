import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import M2settingView from "./M2settingView";
import ReactDOM from "react-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import withReactContent from "sweetalert2-react-content";
import { ModalForm } from "./ModalForm";
import BankAccountServices from "../services/bank-account.services";
import { approvePendingBussiness } from "../store/actions/BussinessAction";
import Otp from "./Otp";
import UserService from "../services/user.service";
import DataTable from "react-data-table-component";

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <input
      id="search"
      type="text"
      placeholder="Filter By Title"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary focus:border-primary block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />

    <button
      type="button"
      onClick={onClear}
      className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
    >
      Clear
    </button>
  </>
);

function convertArrayOfObjectsToCSV(array) {
  let result;

  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(data[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  array.forEach((item) => {
    let ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];

      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

function downloadCSV(array) {
  const link = document.createElement("a");
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = "export.csv";

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
}

const Export = ({ onExport }) => (
  <button
    onClick={(e) => onExport(e.target.value)}
    className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium text-sm px-2.5 py-2.5 mr-4 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
  >
    Export
  </button>
);

const MySwal = withReactContent(Swal);

function Tablesite(props) {
  const showFormModal = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "Activate this Account",
        html: (
          <M2settingView
            modal_data={values}
            // title="View Unactivated Account"
            onSubmit={(value) => {
              console.log(value);
              console.log("Your Button is got Clicked");
              dispatch(
                approvePendingBussiness(value),
                Swal.fire({
                  icon: "success",
                  title: "Verified Successfully",
                  showConfirmButton: false,
                  timer: 3000,
                  
                })
              ).then(() => {
                console.log("firing swal");
              });
            }}
            onCancel={() => {
              Swal.close();
            }}
          />
        ),
        customClass: "swal-width",
        

        onClose: () => reject(),
        showConfirmButton: false,
      });
    });
  };

  const showSecondModal = (index) => {
    console.log(index);
    showFormModal(index)
      .then((values) => console.log(values))
      .catch(() => console.log("Modal closed"));
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row.bussiness_id,
      sortable: true,
    },
    {
      name: "Legal Name",
      selector: (row) => row.legalName,
      sortable: true,
    },
    {
      name: "Incorporation Type",
      selector: (row) => row.incorporationType,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "View",
      cell: (row) => (
        <label
          htmlFor="my-modal-3"
          className="cursor-pointer"
          onClick={() => showSecondModal(row)}
        >
          <svg
            className="w-6 h-6 text-primary"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
            <line x1="16" y1="5" x2="19" y2="8" />
          </svg>
        </label>
      ),
    },
  ];

  const [filterText, setFilterText] = React.useState("");
  const actionsMemo = useMemo(
    () => <Export onExport={() => downloadCSV(data)} />,
    []
  );
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.title && item.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const bussinesResponse = useSelector((state) => state.bussinessInfo);
  console.log(bussinesResponse);
  const { loading, error, pendingBussiness } = bussinesResponse;
  const dispatch = useDispatch();
  const tableData = props.request;

  if (tableData) {
    const showModal = (index) => {
      console.log(index);
      showFormModal(tableData[index])
        .then((values) => console.log(values))
        .catch(() => console.log("Modal closed"));
    };

    return (
      <>
        <DataTable
          title="Test List"
          columns={columns}
          data={tableData}
          pagination
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          // selectableRows
          persistTableHeadstriped
          highlightOnHover
          actions={actionsMemo}
        />
      </>
    );
  }
}

export default Tablesite;
