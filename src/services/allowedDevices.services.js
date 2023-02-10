import axios from "axios";
const fetchRegisteredDevicesUrl =
  "http://localhost:5000/registered/device/all/";

const getAllRegisteredDevices = async () => {
  console.log("calling endpoint");

  return await axios.get(fetchRegisteredDevicesUrl).then((response) => {
    return response.data.allDevices;
  });
};

const RegisteredDeviceServices = {
  getAllRegisteredDevices,
};

export default RegisteredDeviceServices;
