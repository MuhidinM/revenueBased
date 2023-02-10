import axios from "axios";
const fetchRegisteredDevicesUrl =
  "http://localhost:5000/registered/device/all/";
const deviceRegisterUrl = "http://localhost:5000/allowed/device/register/";

const getAllRegisteredDevices = async () => {
  // console.log("calling endpoint");
  return await axios.get(fetchRegisteredDevicesUrl).then((response) => {
    return response.data.allDevices;
  });
};

const deviceRegister = async (deviceId, id) => {
  console.log(deviceId);
  console.log(id);
  const response = await axios.post(deviceRegisterUrl, { deviceId, id });
  let data = response.data;
  return data;
};

const RegisteredDeviceServices = {
  getAllRegisteredDevices,
  deviceRegister,
};

export default RegisteredDeviceServices;
