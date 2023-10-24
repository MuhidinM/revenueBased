import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { getInventoryDetail } from "../../store/actions/getInventoryAction";
import Banner from "./Banner";
import RBFStats from "./RBFStat";
import RNFChart from "./RNFChart";

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

function RBFHome() {
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
        <RBFStats items={inventoryDetail} />
        <div className="grid gap-2 mt-2 md:grid-cols-12 justify-self-auto">
          <div className="col-span-6 p-2 rounded shadow bg-white">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-cyan-500 pb-2">
                Revenue
              </h3>
              <select className="select select-sm max-w-xs">
                <option disabled selected>
                  Filter
                </option>
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>
            <RNFChart />
          </div>
          <div className="col-span-3 p-2 rounded shadow bg-white">
            <h2 className=" font-semibold pb-2 flex items-center justify-center">
              Profitability
            </h2>
            <div className="flex items-center justify-center my-2">
              <select className="select select-sm max-w-xs">
                <option disabled selected>
                  Time
                </option>
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>
            <div className="flex items-center justify-between border-b">
              <span className="text-gray-500">Metric</span>
              <span className="text-gray-500">amount</span>
            </div>
            <div className="flex items-center py-2 justify-between border-b mx-1">
              <span className="text-gray-600">Income</span>
              <span className="font-semibold">1690</span>
            </div>
            <div className="flex items-center py-2 justify-between border-b mx-1">
              <span className="text-gray-600">Net Profit</span>
              <span className="font-semibold">690</span>
            </div>
            <div className="flex items-center py-2 justify-between border-b mx-1">
              <span className="text-gray-600">Gross Profit</span>
              <span className="font-semibold">453</span>
            </div>
            <div className="flex items-center py-2 justify-between border-b mx-1">
              <span className="text-gray-600">Expense</span>
              <span className="font-semibold">2583</span>
            </div>
            <div className="flex items-center py-2 justify-between border-b mx-1">
              <span className="text-gray-600">Profit</span>
              <span className="font-semibold">12045</span>
            </div>
          </div>
          <div className="col-span-3 p-2 rounded shadow bg-white">
            <h2 className=" font-semibold pb-2 flex items-center justify-center">
              Top Sales
            </h2>
            <div className="flex items-center justify-between border-b">
              <span className="text-gray-500">Item</span>
              <span className="text-gray-500">Total amount</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between p-1 rounded w-full border-y pt-2 my-1">
                <div className="flex items-center">
                  <div className="avatar mr-2">
                    <div className="w-7 h-7 rounded">
                      <img
                        src="https://pictures-ethiopia.jijistatic.com/504477_NjIwLTcyNi01ZjY2MWIwMjk2LTE.webp"
                        alt="galaxy"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col item-start justify-center">
                    <h3 className="font-semibold text-sm whitespace-nowrap">
                      Galaxy A32
                    </h3>
                    <div className="text-xs text-gray-500">
                      10 Items are sold
                    </div>
                  </div>
                </div>
                <span className="font-semibold">100$</span>
              </div>
              <div className="flex items-center justify-between p-1 rounded w-full border-b my-1">
                <div className="flex items-center">
                  <div className="avatar mr-2">
                    <div className="w-7 h-7 rounded">
                      <img
                        src="https://pictures-ethiopia.jijistatic.com/504477_NjIwLTcyNi01ZjY2MWIwMjk2LTE.webp"
                        alt="galaxy"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col item-start justify-center">
                    <h3 className="font-semibold text-sm whitespace-nowrap">
                      Galaxy A32
                    </h3>
                    <div className="text-xs text-gray-500">
                      10 Items are sold
                    </div>
                  </div>
                </div>
                <span className="font-semibold">100$</span>
              </div>
              <div className="flex items-center justify-between p-1 rounded w-full border-b my-1">
                <div className="flex items-center">
                  <div className="avatar mr-2">
                    <div className="w-7 h-7 rounded">
                      <img
                        src="https://pictures-ethiopia.jijistatic.com/504477_NjIwLTcyNi01ZjY2MWIwMjk2LTE.webp"
                        alt="galaxy"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col item-start justify-center">
                    <h3 className="font-semibold text-sm whitespace-nowrap">
                      Galaxy A32
                    </h3>
                    <div className="text-xs text-gray-500">
                      10 Items are sold
                    </div>
                  </div>
                </div>
                <span className="font-semibold">100$</span>
              </div>
              <div className="flex items-center justify-between p-1 rounded w-full border-b my-1">
                <div className="flex items-center">
                  <div className="avatar mr-2">
                    <div className="w-7 h-7 rounded">
                      <img
                        src="https://pictures-ethiopia.jijistatic.com/504477_NjIwLTcyNi01ZjY2MWIwMjk2LTE.webp"
                        alt="galaxy"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col item-start justify-center">
                    <h3 className="font-semibold text-sm whitespace-nowrap">
                      Galaxy A32
                    </h3>
                    <div className="text-xs text-gray-500">
                      10 Items are sold
                    </div>
                  </div>
                </div>
                <span className="font-semibold">100$</span>
              </div>
              <div className="flex items-center justify-between p-1 rounded w-full border-b my-1">
                <div className="flex items-center">
                  <div className="avatar mr-2">
                    <div className="w-7 h-7 rounded">
                      <img
                        src="https://pictures-ethiopia.jijistatic.com/504477_NjIwLTcyNi01ZjY2MWIwMjk2LTE.webp"
                        alt="galaxy"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col item-start justify-center">
                    <h3 className="font-semibold text-sm whitespace-nowrap">
                      Galaxy A32
                    </h3>
                    <div className="text-xs text-gray-500">
                      10 Items are sold
                    </div>
                  </div>
                </div>
                <span className="font-semibold">100$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RBFHome;
