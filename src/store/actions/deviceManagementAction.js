import {
  GET_ADMIN_ALL_DEVICES,
  GET_ADMIN_ALL_DEVICES_ERROR,
  REGISTER_DEVICES,
  REGISTER_DEVICES_ERROR,
} from "../types";
// import AuthService from "../../services/auth.service";

import RegisteredDeviceServices from "../../services/allowedDevices.services";
export const getAllRegisterdDevices = () => async (dispatch) => {
  try {
    console.log("running");
    const allDevices = await RegisteredDeviceServices.getAllRegisteredDevices();
    console.log("divices" + allDevices);
    // dispatch(getAllRegisterdDevices()); //to add automatically and fetch it while adding
    dispatch({
      type: GET_ADMIN_ALL_DEVICES,
      payload: allDevices,
    });
  } catch (error) {
    dispatch({
      type: GET_ADMIN_ALL_DEVICES_ERROR,
      payload: error,
    });
  }
};

// export const registerDevices = (deviceId, id) => async (dispatch) => {
//   console.log("heloo");
//   try {
//     // const user = AuthService.getCurrentUser();
//     console.log("running");
//     const registerDevice = await RegisteredDeviceServices.deviceRegister(
//       deviceId,
//       id
//     );
//     console.log(registerDevice);
//     dispatch({
//       type: REGISTER_DEVICES,
//       payload: registerDevice,
//     });
//   } catch (error) {
//     dispatch({
//       type: REGISTER_DEVICES_ERROR,
//       payload: error,
//     });
//   }
// };
