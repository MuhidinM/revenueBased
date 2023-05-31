import { SET_SALES } from "../types";
// import AuthService from "../../services/auth.service";

import UserService from "../../services/user.service";
export const getSalesDetail = (userID) => async (dispatch) => {
  try {
    // const user = AuthService.getCurrentUser();
    console.log("running");
    const salesDetail = await UserService.getAllSales(userID);
    console.log(salesDetail);
    dispatch({
      type: SET_SALES,
      payload: salesDetail,
    });
  } catch (error) {
    console.log(error);
  }
};
