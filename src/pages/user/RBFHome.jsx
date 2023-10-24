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
        <div className="grid gap-4 mt-2 md:grid-cols-12 justify-self-auto">
          <div className="col-span-8 p-5 rounded-xl bg-white">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-cyan-500 pb-2">
                Money Flow
              </h3>
              <select className="select select-bordered select-sm max-w-xs">
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
          <div className="col-span-4 p-5 rounded-xl bg-white">
            <h2 className="text-xl font-semibold pb-2">Top Sales</h2>
            <div className="flex flex-col">
              <div className="flex items-center justify-between p-2 rounded w-full border my-1">
                <div className="flex">
                  <div className="avatar mr-2">
                    <div className="w-8 rounded">
                      <img
                        src="https://pictures-ethiopia.jijistatic.com/504477_NjIwLTcyNi01ZjY2MWIwMjk2LTE.webp"
                        alt="galaxy"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col item-start justify-center">
                    <h3 className="font-bold whitespace-nowrap">Galaxy A32</h3>
                    <div className="text-xs">10 Items are sold this month</div>
                  </div>
                </div>
                <span>100$</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded w-full border my-1">
                <div className="flex">
                  <div className="avatar mr-2">
                    <div className="w-8 rounded">
                      <img
                        src="https://pictures-ethiopia.jijistatic.com/504477_NjIwLTcyNi01ZjY2MWIwMjk2LTE.webp"
                        alt="galaxy"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col item-start justify-center">
                    <h3 className="font-bold whitespace-nowrap">Galaxy A32</h3>
                    <div className="text-xs">10 Items are sold this month</div>
                  </div>
                </div>
                <span>100$</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded w-full border my-1">
                <div className="flex">
                  <div className="avatar mr-2">
                    <div className="w-8 rounded">
                      <img
                        src="https://pictures-ethiopia.jijistatic.com/504477_NjIwLTcyNi01ZjY2MWIwMjk2LTE.webp"
                        alt="galaxy"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col item-start justify-center">
                    <h3 className="font-bold whitespace-nowrap">Galaxy A32</h3>
                    <div className="text-xs">10 Items are sold this month</div>
                  </div>
                </div>
                <span>100$</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded w-full border my-1">
                <div className="flex">
                  <div className="avatar mr-2">
                    <div className="w-8 rounded">
                      <img
                        src="https://pictures-ethiopia.jijistatic.com/504477_NjIwLTcyNi01ZjY2MWIwMjk2LTE.webp"
                        alt="galaxy"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col item-start justify-center">
                    <h3 className="font-bold whitespace-nowrap">Galaxy A32</h3>
                    <div className="text-xs">10 Items are sold this month</div>
                  </div>
                </div>
                <span>100$</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded w-full border my-1">
                <div className="flex">
                  <div className="avatar mr-2">
                    <div className="w-8 rounded">
                      <img
                        src="https://pictures-ethiopia.jijistatic.com/504477_NjIwLTcyNi01ZjY2MWIwMjk2LTE.webp"
                        alt="galaxy"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col item-start justify-center">
                    <h3 className="font-bold whitespace-nowrap">Galaxy A32</h3>
                    <div className="text-xs">10 Items are sold this month</div>
                  </div>
                </div>
                <span>100$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RBFHome;
