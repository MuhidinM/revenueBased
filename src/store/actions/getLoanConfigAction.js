import { SET_LOAN_CONFIG, SET_LOAN_PDF, SET_LOAN_REQUEST } from "../types";
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

export const getLoanRequestDetail = (userID) => async (dispatch) => {
  try {
    // const user = AuthService.getCurrentUser();
    // console.log("running");
    const loanRequest = await LoanConfigService.getLoanRequest(userID);
    console.log(loanRequest);
    dispatch({
      type: SET_LOAN_REQUEST,
      payload: loanRequest,
    });
  } catch (error) {
    console.log(error);
  }
};
export const generateLoanDetailPdf =
  (
    sales_id,
    loan_req_id,
    first_name,
    last_name,
    interest_rate,
    duation,
    amount,
    setLoanPdf
  ) =>
  async (dispatch) => {
    try {
      // const user = AuthService.getCurrentUser();
      // console.log("running");
      const loanPdf = await LoanConfigService.generateLoanPdf(
        sales_id,
        loan_req_id,
        first_name,
        last_name,
        interest_rate,
        duation,
        amount,
        setLoanPdf
      );
      console.log(loanPdf);
      dispatch({
        type: SET_LOAN_PDF,
        payload: loanPdf,
      });
    } catch (error) {
      console.log(error);
    }
  };
