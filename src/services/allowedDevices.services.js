import { NODE_API } from "../utils/API";
const getAllRegisteredDevices = async (id) => {
  // console.log("calling endpoint");
  // console.log("User Id Is: ", id);
  return await NODE_API.get(`/device/all?user_id=${id}`).then((response) => {
    console.log(response.data);
    return response.data.allDevices;
  });
};
const getAllDevices = async () => {
  // console.log("calling endpoint");
  // console.log("User Id Is: ", id);
  return await NODE_API.get(`/device/allDevices`).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

const RegisteredDeviceServices = {
  getAllRegisteredDevices,
  getAllDevices,
};

export default RegisteredDeviceServices;
