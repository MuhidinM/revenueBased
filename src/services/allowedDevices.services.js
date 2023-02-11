import axios from "axios";
const fetchRegisteredDevicesUrl =
  "http://localhost:5000/registered/device/all/";
const deviceRegisterUrl = "http://localhost:5000/allowed/device/register/";

const getAllRegisteredDevices = async () => {
  // console.log("calling endpoint");
  return await axios.get(fetchRegisteredDevicesUrl).then((response) => {
    // console.log("text" + response.data);
    return response.data.allDevices;
  });
};

const RegisteredDeviceServices = {
  getAllRegisteredDevices,
};

export default RegisteredDeviceServices;
