// import React from "react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllRegisterdDevices } from "../../store/actions/deviceManagementAction";
import Input from "../../components/Input";
//This is for the transaction

function DeviceManagement() {
  // const [conditionalRendering, setconditionalRendering] = useState(true);
  const DeviceList = useSelector((state) => state.deviceDetail);
  // this.setState({data: data.conversations});
  console.log("List of dv" + DeviceList);
  const { loading, error, deviceDetail } = DeviceList;
  const dispatch = useDispatch();
  console.log(deviceDetail);
  useEffect(() => {
    // console.log("useEffect");
    dispatch(getAllRegisterdDevices());
  }, []);
  console.log(deviceDetail);
  // const renderList =
  // deviceDetail instanceof Array
  //   ? deviceDetail.map((item, index) => (
  //       <tr>
  //         <th>{item.deviceId}</th>
  //         <td>{item.id}</td>
  //       </tr>
  //     ))
  //   : "";
  // if (transactionDetail) {
  return (
    <>
      <div className="grid gap-4 my-4 mt-4 md:grid-cols-12 justify-self-auto">
        <div className="col-span-9"></div>
        <div className="col-span-3">
          <Input
            label="search"
            title="Search"
            type="text"
            name="search"
            // value={props.values.lgname}
            // handleChange={props.handleChange}
            // onChange={props.handleChange}
            // handleChange={searchByTransactionId}
            place="Search by transactionid"
            required=""
          />
        </div>
      </div>
      <div className="w-5/6 m-8">
        <div className="mt-4 overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Device MAC Address</th>
                <th>Merchant ID</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}

export default DeviceManagement;
