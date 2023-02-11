import {
  GET_UN_ACTIVE_BUSSINESS,
  GET_UN_ACTIVE_BUSSINESS_ERROR,
  ACTIVATE_BUSSINESS,
  ACTIVATE_BUSSINESS_ERROR,
} from "../types";
// import AuthService from "../../services/auth.service";

import UserService from "../../services/user.service";
export const getAllPendingBussiness = () => async (dispatch) => {
  console.log("heloo");
  try {
    // const user = AuthService.getCurrentUser();
    console.log("running");
    const pendingBussiness = await UserService.getAllPendingBussiness();
    console.log(pendingBussiness);
    dispatch({
      type: GET_UN_ACTIVE_BUSSINESS,
      payload: pendingBussiness,
    });
  } catch (error) {
    dispatch({
      type: GET_UN_ACTIVE_BUSSINESS_ERROR,
      payload: error,
    });
  }
};

export const approvePendingBussiness = (id) => async (dispatch) => {
  console.log("heloo");
  try {
    // const user = AuthService.getCurrentUser();
    console.log("running");
    const approvedBussiness = await UserService.approvePendingBussinessById(id);
    console.log(approvedBussiness);
    dispatch(getAllPendingBussiness());
    dispatch({
      type: ACTIVATE_BUSSINESS,
      payload: approvedBussiness,
    });
  } catch (error) {
    dispatch({
      type: ACTIVATE_BUSSINESS_ERROR,
      payload: error,
    });
  }
};
