import { GET_TRANSACTION, GET_TRANSACTION_ERROR } from "../types";
// import AuthService from "../../services/auth.service";

import FetchTransactionServices from "../../services/fetchTransaction";
export const getTransactionDetail = () => async (dispatch) => {
  try {
    // const user = AuthService.getCurrentUser();
    const transactioDetail = await FetchTransactionServices.getTransaction();
    console.log(transactioDetail);
    dispatch({
      type: GET_TRANSACTION,
      payload: transactioDetail,
    });
  } catch (error) {
    dispatch({
      type: GET_TRANSACTION_ERROR,
      payload: error,
    });
  }
};
