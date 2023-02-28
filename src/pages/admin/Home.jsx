import React from "react";
import Card from "./Card";
import Stat from "../../components/Stat";
import DataTable from "react-data-table-component";

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
function Content() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 m-4 justify-self-auto">
        <div className="col-span-8">
          <Stat />
          <DataTable
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
        <div className="flex col-span-4">
          <Card />
        </div>
      </div>
    </>
  );
}

export default Content;
