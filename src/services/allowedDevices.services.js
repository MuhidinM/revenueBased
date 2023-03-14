import axios from "axios";
const fetchRegisteredDevicesUrl = "http://10.1.177.130:5000/device/";
const deviceRegisterUrl = "http://10.1.177.130:5000/device/";

const getAllRegisteredDevices = async (id) => {
  // console.log("calling endpoint");
  console.log("User Id Is: ", id);
  return await axios
    .get(fetchRegisteredDevicesUrl + `all/${id}`)
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
