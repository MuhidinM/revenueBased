import React, { useMemo } from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "no",
    selector: (row) => row.no,
    sortable: true,
  },
  {
    name: "First Name",
    selector: (row) => row.fname,
    sortable: true,
  },
  {
    name: "Middle Name",
    selector: (row) => row.lname,
    sortable: true,
  },
  {
    name: "Business email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Business Phone",
    selector: (row) => row.phone,
    sortable: true,
  },
  {
    name: "Identification Card",
    selector: (row) => row.idcard,
    sortable: true,
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

  const filename = "user.csv";

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

function Users() {
  const [filterText, setFilterText] = React.useState("");
  const actionsMemo = useMemo(
    () => <Export onExport={() => downloadCSV(data)} />,
    []
  );
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.email && item.email.toLowerCase().includes(filterText.toLowerCase())
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

  return (
    <DataTable
      title="User List"
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
  );
  //   return (
  //     <>
  //       <div className="grid gap-4 my-4 mt-4 md:grid-cols-12 justify-self-auto">
  //         <div className="col-span-9"></div>
  //         <div className="col-span-3">
  //           <Input
  //             label="search"
  //             title="Search"
  //             type="text"
  //             name="search"
  //             // value={props.values.lgname}
  //             // handleChange={props.handleChange}
  //             // onChange={props.handleChange}

  //             place="Search by name"
  //             required=""
  //           />
  //         </div>
  //       </div>
  //       <div className="overflow-x-auto">
  //         <table className="table w-full">
  //           {/* <!-- head --> */}
  //           <thead>
  //             <tr>
  //               <th></th>
  //               <th>Name</th>
  //               <th>Address</th>
  //               <th>Region</th>
  //               <th>Birth Date</th>
  //               <th>Identification No</th>
  //               <th>View</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {/* <!-- row 1 --> */}
  //             <tr>
  //               <th>1</th>
  //               <td>Cy Ganderton</td>
  //               <td>Quality Control Specialist</td>
  //               <td>Quality Control Specialist</td>
  //               <td>Quality Control Specialist</td>
  //               <td>Blue</td>
  //               <td>
  //                 <a href="" className="text-primary">
  //                   view
  //                 </a>
  //               </td>
  //             </tr>
  //             {/* <!-- row 2 --> */}
  //             <tr className="hover">
  //               <th>2</th>
  //               <td>Hart Hagerty</td>
  //               <td>Desktop Support Technician</td>
  //               <td>Desktop Support Technician</td>
  //               <td>Desktop Support Technician</td>
  //               <td>Purple</td>
  //               <td>
  //                 <a href="" className="text-primary">
  //                   view
  //                 </a>
  //               </td>
  //             </tr>
  //             {/* <!-- row 3 --> */}
  //             <tr>
  //               <th>3</th>
  //               <td>Brice Swyre</td>
  //               <td>Tax Accountant</td>
  //               <td>Tax Accountant</td>
  //               <td>Tax Accountant</td>
  //               <td>Red</td>
  //               <td>
  //                 <a href="" className="text-primary">
  //                   view
  //                 </a>
  //               </td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       </div>
  //     </>
  //   );
}

export default Users;
