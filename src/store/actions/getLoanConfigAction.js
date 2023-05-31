import { SET_LOAN_CONFIG } from "../types";
// import AuthService from "../../services/auth.service";

import LoanConfigService from "../../services/loanConfig.service";
export const getLoanConfigDetail = (userID) => async (dispatch) => {
  try {
    // const user = AuthService.getCurrentUser();
    console.log("running");
    const loanDetail = await LoanConfigService.getLoanConfig(userID);
    console.log(loanDetail);
    dispatch({
      type: SET_LOAN_CONFIG,
      payload: loanDetail,
    });
  } catch (error) {
    console.log(error);
  }
};
