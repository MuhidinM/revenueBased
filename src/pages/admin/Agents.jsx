import React, { useMemo, useEffect } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import AccountComponent from "../../components/AccountComponent";
import AgentComponent from "../../components/AgentComponent";
import { useDispatch, useSelector } from "react-redux";
import { addAgent, getAgent } from "../../store/actions/agentAction";
const MySwal = withReactContent(Swal);

const showModalAccount = () => {
  showFormModalAccount({
    name: "",
    url: "",
  })
    .then((values) => console.log(values))
    .catch(() => console.log("Modal closed"));
};
const showFormModalAccount = (values) => {
  return new Promise((resolve, reject) => {
    MySwal.fire({
      title: "Register Your Domain",
      html: (
        <AccountComponent
          values={values}
          onSubmit={(values) => {
            //   console.log(values);
            //   console.log(currentUser.id);
            //   dispatch(addDomain(currentUser.id, values.name, values.url));
            //   console.log("The button is got Clicked");
          }}
          onCancel={() => MySwal.close()}
        ></AccountComponent>
      ),
      onClose: () => reject(),
      onCancel: () => Swal.close(),
      showConfirmButton: false,
      showCancelButton: false,
      confirmButtonColor: "#01AFEF",
    });
  });
};

const columns = [
  {
    name: "First Name",
    selector: (row) => row.fname,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.lname,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Phone",
    selector: (row) => row.phone,
    sortable: true,
  },
  {
    name: "View",
    cell: (row) => (
      <label
        htmlFor="my-modal-3"
        className="cursor-pointer"
        onClick={() => showModalAccount(row)}
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

const data = [
  {
    no: 1,
    fname: "Beetle",
    lname: "Juice",
    email: "1988@epay.com",
    phone: "09887654",
    idcard: "t1988",
  },
  {
    no: 2,
    fname: "Ghost",
    lname: "Busters",
    email: "1984@epay.com",
    phone: "09849876",
    idcard: "1u984",
  },
];

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <input
      id="search"
      type="text"
      placeholder="Filter By Name"
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
    className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium text-sm px-3.5 py-2.5 mr-2 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
  >
    Export
  </button>
);
function Agents() {
  const [filterText, setFilterText] = React.useState("");
  const AccountListData = useSelector((state) => state.accountsList);
  console.log(AccountListData);
  const { loading, error, bankAccounts } = AccountListData;
  console.log("Account Numbers:", bankAccounts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAgent());
  }, [dispatch]);

  const actionsMemo = useMemo(
    () => <Export onExport={() => downloadCSV(data)} />,
    []
  );
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.fname && item.fname.toLowerCase().includes(filterText.toLowerCase())
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

  const interpretResponse = (response) => {
    let actionResponse = JSON.stringify(response);
    console.log("Action Response Is" + actionResponse.response);
    console.log(
      " Response Is" + response.response,
      response.message + "",
      response.responseCode
    );
    if (response.response === "success" || response.responseCode == 200) {
      console.log(response);
      console.log("Rsponse from useEffect is here" + response);
      Swal.fire({
        icon: "success",
        title: "Account Created",
        showConfirmButton: false,
        timer: 3000,
      });
    } else if (response.responseCode === 403 && response.respone === "error") {
      console.log("Un Authorised User ");
      Swal.fire({
        icon: "error",
        title: response.message,
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Account Is Not Created",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  const showFormModalAgent = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "Register Your Domain",
        html: (
          <AgentComponent
            values={values}
            onSubmit={(values) => {
              console.log("Value From The Child:", values);

              dispatch(
                addAgent({
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  phoneNumber: values.phoneNumber,
                  interpretResponse,
                })
              );

              //   console.log(values);
              //   console.log(currentUser.id);
              //   dispatch(addDomain(currentUser.id, values.name, values.url));
              //   console.log("The button is got Clicked");
            }}
            onCancel={() => MySwal.close()}
          ></AgentComponent>
        ),
        onClose: () => reject(),
        onCancel: () => Swal.close(),
        showConfirmButton: false,
        showCancelButton: false,
        confirmButtonColor: "#01AFEF",
      });
    });
  };

  const showModalAgent = () => {
    showFormModalAgent({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    })
      .then((values) => console.log(values))
      .catch(() => console.log("Modal closed"));
  };

  return (
    <>
      <button
        type="button"
        className="mb-4 btn btn-outline btn-primary"
        onClick={showModalAgent}
      >
        Add Agent
      </button>
      <DataTable
        title="Agent List"
        columns={columns}
        data={filteredItems}
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

export default Agents;
