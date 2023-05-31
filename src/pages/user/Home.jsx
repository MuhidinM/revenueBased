import React from "react";
import Stat from "./Stat";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";

const columns = [
  {
    name: "Image",
    cell: (row) => {
      return (
        <div className="p-2">
          <img
            src={`http://192.168.14.245:5000/pictures/${row.item_pic}`}
            style={{ width: "40px", height: "40px" }}
            alt=""
          />
        </div>
      );
    },
  },
  {
    name: "Name",
    selector: (row) => row.item_name,
    sortable: true,
  },
  {
    name: "Type",
    selector: (row) => row.item_type,
    sortable: true,
  },
  {
    name: "Code",
    selector: (row) => row.item_code,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row) => row.item_price,
    sortable: true,
  },
  {
    name: "Created At",
    selector: (row) => new Date(row.createdAt).toISOString().split("T")[0],
    sortable: true,
  },
];

function Home() {
  const inventoryInfo = useSelector((state) => state.inventoryInfo);
  // console.log(userData);
  const { inventoryDetail } = inventoryInfo;

  return (
    <>
      <div className="">
        <Stat />
        <div className="grid gap-4 mt-4 md:grid-cols-12 justify-self-auto">
          <div className="col-span-8">
            <DataTable
              title="New Items"
              columns={columns}
              data={inventoryDetail}
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

export default Home;
