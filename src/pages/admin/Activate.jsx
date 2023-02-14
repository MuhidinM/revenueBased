import React, { useState, useEffect } from "react";
import Tablesite from "../../components/Tablesite";
// import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
import { useDispatch, useSelector } from "react-redux";
import { getAllPendingBussiness } from "../../store/actions/BussinessAction";
function Activate() {
  // const [pendinRequest, setpendinRequest] = useState([]);
  const bussinesResponse = useSelector((state) => state.bussinessInfo);
  console.log(bussinesResponse);
  const { loading, error, pendingBussiness } = bussinesResponse;
  const dispatch = useDispatch();
  // const callServices = async () => {
  //   const pendingBussinesses = await UserService.getAllPendingBussiness();
  //   // console.log(pendingBussinesses[0]);
  //   if (pendingBussinesses) {
  //     setpendinRequest(pendingBussinesses);
  //   }
  // };
  useEffect(() => {
    dispatch(getAllPendingBussiness());
  }, [dispatch]);
  console.log(pendingBussiness);
  return (
    <>
      <div className="m-4 mt-8 ">
        <Tablesite request={pendingBussiness} />
      </div>
    </>
  );
}

export default Activate;
