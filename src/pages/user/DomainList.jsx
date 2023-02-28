import React, { useMemo, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch, useSelector } from "react-redux";
// import RegisteredDeviceServices from "../../services/allowedDevices.services";
import AuthService from "../../services/auth.service";
import DomainComponent from "../../components/DomainComponent";
// import { getAllRegisterdDevices } from "../../store/actions/deviceManagementAction";

import { addDomain, getDomain } from "../../store/actions/domainAction";
const MySwal = withReactContent(Swal);
const columns = [
  {
    name: "URL name",
    selector: (row) => row.urlsName,
    sortable: true,
  },
  {
    name: "URL",
    selector: (row) => row.url,
    sortable: true,
  },
  {
    name: "Merchant ID",
    selector: (row) => row.urls_id,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: "Mac123qaz",
    year: "2023",
  },
  {
    id: 2,
    title: "Mac123qaz",
    year: "2022",
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

function DomainList() {
  const [tableData, setTableData] = useState([]);
  const addedDomain = useSelector((state) => state.domain);
  const userData = useSelector((state) => state.userProfile);
  console.log(userData);
  const { bankAccounts, userDetail } = userData;
  // const addedDomain = useSelector((state) => console.log(state));
  console.log(addedDomain);
  const { loading, error, domain, response, domains } = addedDomain;
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    dispatch(getDomain(user.user.user_id));

    if (user) {
      setCurrentUser(user);
      // setTableData(domains);
      console.log("did mount");
    }
  }, []);

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

  const interpretResponse = (response) => {
    let actionResponse = JSON.stringify(response);
    console.log("Action Response Is" + actionResponse.response);
    console.log(
      " Response Is" + response.response,
      response.message + "",
      response.responseCode
    );
    if (response.response === "success" && response.responseCode == 200) {
      console.log(response);
      console.log("Response from useEffect is here" + response);
      Swal.fire({
        icon: "success",
        title: "Domain Created",
        showConfirmButton: false,
        timer: 3000,
      });
    } else if (response.responseCode == 403 && response.respone === "error") {
      console.log("Un Authorised User ");
      Swal.fire({
        icon: "error",
        title: response.message,
        showConfirmButton: false,
        timer: 3000,
      });
    } else if (response.responseCode === 401 || response.respone === "error") {
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
        title: "Domain Is Not Created",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  const showFormModal = (values) => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "Register Your Domain",
        html: (
          <DomainComponent
            values={values}
            onSubmit={(values) => {
              console.log(values);
              console.log("Your Current User is" + JSON.stringify(userDetail));

              dispatch(
                addDomain({
                  user_id: currentUser.user.user_id,
                  name: values.name,
                  url: values.url,
                  interpretResponse,
                })
              );
              console.log("The button is got Clicked");
              MySwal.close();
            }}
            onCancel={() => {
              console.log("Cancel Is Called:");
              MySwal.close();
            }}
          ></DomainComponent>
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
    <div className="m-4">
      <button
        type="button"
        className="mb-4 btn btn-outline btn-primary"
        onClick={showModal}
      >
        Add Domain
      </button>
      {loading ? (
        "Loading"
      ) : (
        <DataTable
          title="List Of End Points"
          columns={columns}
          data={domains}
          pagination
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          // selectableRows
          persistTableHeadstriped
          highlightOnHover
          actions={actionsMemo}
        />
      )}
    </div>
  );
}

export default DomainList;
