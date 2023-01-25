import React, { useState, useEffect } from "react";
import Tablesite from "../../components/Tablesite";
// import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
function Activate() {
  const [pendinRequest, setpendinRequest] = useState([]);
  const callServices = async () => {
    const pendingBussinesses = await UserService.getAllPendingBussiness();
    // console.log(pendingBussinesses[0]);
    if (pendingBussinesses) {
      setpendinRequest(pendingBussinesses[0]);
    }
  };
  useEffect(() => {
    callServices();
  }, []);
  console.log(pendinRequest);
  return (
    <>
      <div className="w-5/6 mt-8">
        <Tablesite request={pendinRequest} />
      </div>
    </>
  );
}

export default Activate;
