import {
  GET_ADMIN_ALL_DEVICES,
  GET_ADMIN_ALL_DEVICES_ERROR,
  // REGISTER_DEVICES,
  // REGISTER_DEVICES_ERROR,
} from "../types";

const initialState = {
  deviceDetail: [],
  loading: true,
};
export default function (state = initialState, action) {
  //   console.log(state);
  console.log("heloo" + action.payload);
  switch (action.type) {
    case GET_ADMIN_ALL_DEVICES:
      //   console.log(action.payload);
      return {
        ...state,
        deviceDetail: action.payload,
        loading: false,
      };
    case GET_ADMIN_ALL_DEVICES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
