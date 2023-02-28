import {
  GET_UN_ACTIVE_BUSSINESS,
  GET_UN_ACTIVE_BUSSINESS_ERROR,
  ACTIVATE_BUSSINESS,
  ACTIVATE_BUSSINESS_ERROR,
  SUCCESS_RESPONSE_SETTER,
  ERROR_RESPONSE_SETTER,
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

export const approvePendingBussiness =
  ({ id, interpretResponse }) =>
  async (dispatch) => {
    console.log("heloo");
    try {
      // const user = AuthService.getCurrentUser();
      console.log("running", id);
      const approvedBussiness = await UserService.approvePendingBussinessById(
        id
      );
      console.log(approvedBussiness);
      if (approvedBussiness[1] == "200") {
        // dispatch(satResponse("success"));
        interpretResponse({
          message: approvedBussiness[0].message,
          response: "success",
          responseCode: approvedBussiness[1],
        });
      } else if (approvedBussiness[1] == "403") {
        interpretResponse({
          message: approvedBussiness[0].message,
          response: "error",
          responseCode: approvedBussiness[1],
        });
      } else {
        // dispatch(satResponse("error"));
        interpretResponse({ response: "error" });
      }
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

export const satResponse = (response) => async (dispatch) => {
  if (response === "success") {
    dispatch({
      type: SUCCESS_RESPONSE_SETTER,
      payload: response,
    });
  } else {
    dispatch({
      type: ERROR_RESPONSE_SETTER,
      payload: response,
    });
  }
};
