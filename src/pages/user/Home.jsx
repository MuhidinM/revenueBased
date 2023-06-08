import React, { useEffect } from "react";
import Stat from "./Stat";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { getInventoryDetail } from "../../store/actions/getInventoryAction";
import Banner from "./Banner";

const columns = [
  {
    name: "Image",
    cell: (row) => {
      return (
        <div className="p-2">
          <img
            src={`http://10.1.177.130:5004/image/${row.item_pic}`}
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
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userProfile);
  // console.log(userData);
  const { userID, kyc } = userData;

  useEffect(() => {
    if (userID) {
      dispatch(getInventoryDetail(userID));
    }
  }, [userID, dispatch]);

  const inventoryInfo = useSelector((state) => state.inventoryInfo);
  // console.log(userData);
  const { inventoryDetail } = inventoryInfo;

  const filteredInventory = inventoryDetail.filter(
    (item) =>
      new Date(item.createdAt).toISOString().split[0] ===
      new Date().toISOString().split[0]
  );

  return (
    <>
      <div className="">
        {!kyc && <Banner />}
        <Stat items={inventoryDetail} />
        <div className="grid gap-4 mt-4 md:grid-cols-12 justify-self-auto">
          <div className="col-span-8">
            <DataTable
              title="Today Items"
              columns={columns}
              data={filteredInventory}
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
