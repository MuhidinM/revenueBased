// import React, { useMemo } from "react";
// import DataTable from "react-data-table-component";

// const columns = [
//   {
//     name: "Title",
//     selector: (row) => row.title,
//     sortable: true,
//   },
//   {
//     name: "Year",
//     selector: (row) => row.year,
//     sortable: true,
//   },
// ];

// const data = [
//   {
//     id: 1,
//     title: "Beetlejuice",
//     year: "1988",
//   },
//   {
//     id: 2,
//     title: "Ghostbusters",
//     year: "1984",
//   },
// ];

// const FilterComponent = ({ filterText, onFilter, onClear }) => (
//   <>
//     <input
//       id="search"
//       type="text"
//       placeholder="Filter By Title"
//       aria-label="Search Input"
//       value={filterText}
//       onChange={onFilter}
//       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary focus:border-primary block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//     />

//     <button
//       type="button"
//       onClick={onClear}
//       className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
//     >
//       Clear
//     </button>
//   </>
// );

// function convertArrayOfObjectsToCSV(array) {
//   let result;

//   const columnDelimiter = ",";
//   const lineDelimiter = "\n";
//   const keys = Object.keys(data[0]);

//   result = "";
//   result += keys.join(columnDelimiter);
//   result += lineDelimiter;

//   array.forEach((item) => {
//     let ctr = 0;
//     keys.forEach((key) => {
//       if (ctr > 0) result += columnDelimiter;

//       result += item[key];

//       ctr++;
//     });
//     result += lineDelimiter;
//   });

//   return result;
// }

// function downloadCSV(array) {
//   const link = document.createElement("a");
//   let csv = convertArrayOfObjectsToCSV(array);
//   if (csv == null) return;

//   const filename = "export.csv";

//   if (!csv.match(/^data:text\/csv/i)) {
//     csv = `data:text/csv;charset=utf-8,${csv}`;
//   }

//   link.setAttribute("href", encodeURI(csv));
//   link.setAttribute("download", filename);
//   link.click();
// }

// const Export = ({ onExport }) => (
//   <button
//     onClick={(e) => onExport(e.target.value)}
//     className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium text-sm px-2.5 py-2.5 mr-4 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
//   >
//     Export
//   </button>
// );

// function Profile() {
//   const [filterText, setFilterText] = React.useState("");
//   const actionsMemo = useMemo(
//     () => <Export onExport={() => downloadCSV(data)} />,
//     []
//   );
//   const [resetPaginationToggle, setResetPaginationToggle] =
//     React.useState(false);
//   const filteredItems = data.filter(
//     (item) =>
//       item.title && item.title.toLowerCase().includes(filterText.toLowerCase())
//   );

//   const subHeaderComponentMemo = React.useMemo(() => {
//     const handleClear = () => {
//       if (filterText) {
//         setResetPaginationToggle(!resetPaginationToggle);
//         setFilterText("");
//       }
//     };

//     return (
//       <FilterComponent
//         onFilter={(e) => setFilterText(e.target.value)}
//         onClear={handleClear}
//         filterText={filterText}
//       />
//     );
//   }, [filterText, resetPaginationToggle]);

//   return (
//     <DataTable
//       title="Test List"
//       columns={columns}
//       data={filteredItems}
//       pagination
//       paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
//       subHeader
//       subHeaderComponent={subHeaderComponentMemo}
//       // selectableRows
//       persistTableHeadstriped
//       highlightOnHover
//       actions={actionsMemo}
//     />
//   );
// }

// export default Profile;

import React from 'react'

function Profile() {
  return (
    <div>Profile</div>
  )
}

export default Profile