import React, { useMemo, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch, useSelector } from "react-redux";

import { getTransactionDetailAll } from "../../store/actions/adminFetchAllTransactions";
import AuthService from "../../services/auth.service";
const MySwal = withReactContent(Swal);
const columns = [
  {
    name: "Transaction ID",
    selector: (row) => row.transactionID,
    sortable: true,
  },
  {
    name: "Message ID",
    selector: (row) => row.messageId,
    sortable: true,
  },
  {
    name: "Credit Account",
    selector: (row) => row.CREDITACCTNO,
    sortable: true,
  },
  {
    name: "Debit Account",
    selector: (row) => row.DEBITACCTNO,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.STATUS,
    sortable: true,
  },
  {
    name: "Amount",
    selector: (row) => row.DEBITAMOUNT,
    sortable: true,
  },
  {
    name: "TRANSACTION_DATE",
    selector: (row) => row.TRANSACTION_DATE,
    sortable: true,
  },
  {
    name: "PROCESSINGDATE",
    selector: (row) => row.PROCESSINGDATE,
    sortable: true,
  },
  {
    name: "TRANSACTIONTYPE",
    selector: (row) => row.TRANSACTIONTYPE,
    sortable: true,
  },
];

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <input
      id="search"
      type="text"
      placeholder="Filter By Transaction Id"
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

const Export = ({ onExport }) => (
  <button
    onClick={(e) => onExport(e.target.value)}
    className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium text-sm px-3.5 py-2.5 mr-2 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
  >
    Export
  </button>
);

function Transactions() {
  function convertArrayOfObjectsToCSV(array) {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(transactionDetailAll[0]);

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
    //Make dynamic the name of file
    let d = new Date();
    // let dformat = `${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`;
    const filename = "TransactionMomo3.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }

  const [tableData, setTableData] = useState([]);
  const getAllDevices = useSelector((state) => state.transactionDetailAll);
  console.log("Devices list" + getAllDevices);
  const { loading, error, transactionDetailAll } = getAllDevices;
  console.log("Fetched devices" + transactionDetailAll);
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      console.log("Client Id", user)
      dispatch(getTransactionDetailAll());
      setTableData(transactionDetailAll);
    }
  }, []);

  const [filterText, setFilterText] = React.useState("");
  const actionsMemo = useMemo(
    () => <Export onExport={() => downloadCSV(transactionDetailAll)} />,
    []
  );
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = transactionDetailAll.filter(
    (item) =>
      item.transactionID &&
      item.transactionID.toLowerCase().includes(filterText.toLowerCase())
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

  const showFormModal = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "Register Your Domain",
        html: (
          <div className="p-8">
            <div>
              <label
                htmlFor="id"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Device Id
              </label>
              <span className="text-sm link-error"></span>
              <input
                type="text"
                name="id"
                id="id"
                placeholder="COOP-00-000"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                //   value={props.values.text}
                //   onChange={props.handleChange}
              />
            </div>
          </div>
        ),
        onClose: () => reject(),
        onCancel: () => Swal.close(),
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonColor: "#01AFEF",
      });
    });
  };
  const showModal = () => {
    showFormModal({})
      .then((values) => console.log(values))
      .catch(() => console.log("Modal closed"));
  };

  return (
    <div className="">
      <DataTable
        title="Transaction Lists"
        columns={columns}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle}
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        // selectableRows
        persistTableHeadstriped
        highlightOnHover
        fixedHeader
        actions={actionsMemo}
      />
    </div>
  );
}

export default Transactions;
