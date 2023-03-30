import axios from "axios";
const getAllRegisteredDevices = async (id) => {
  // console.log("calling endpoint");
  console.log("User Id Is: ", id);
  return await axios
    .get(process.env.REACT_APP_API_NODE_URLS + `device/all/${id}`)
    .then((response) => {
      // console.log("text" + response.data);
      console.log(response.data);
      return response.data.allDevices;
    });
};

const RegisteredDeviceServices = {
  getAllRegisteredDevices,
};

export default RegisteredDeviceServices;
