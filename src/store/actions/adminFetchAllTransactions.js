import {
  GET_ADMIN_TRANSACTION_ALL,
  GET_ADMIN_TRANSACTION_ALL_ERROR,
  GET_TRANSACTION_BY_TRANSACTION_ID,
  GET_TRANSACTION_BY_TRANSACTION_ID_ERROR,
} from "../types";
// import AuthService from "../../services/auth.service";

import FetchTransactionServices from "../../services/fetchTransaction";
export const getTransactionDetailAll = () => async (dispatch) => {
  try {
    // const user = AuthService.getCurrentUser();
    console.log("running");
    const transactioDetailAll =
      await FetchTransactionServices.getAdminTransactionsAall();
    console.log(transactioDetailAll);
    dispatch({
      type: GET_ADMIN_TRANSACTION_ALL,
      payload: transactioDetailAll,
    });
  } catch (error) {
    dispatch({
      type: GET_ADMIN_TRANSACTION_ALL_ERROR,
      payload: error,
    });
  }
};

export const getTransactionByTransactionId =
  (transactionId) => async (dispatch) => {
    try {
      // const user = AuthService.getCurrentUser();
      console.log("running");
      const transactioByTransactionId =
        await FetchTransactionServices.getTransactionByTransactionId(
          transactionId
        );
      console.log(transactioByTransactionId);
      dispatch({
        type: GET_TRANSACTION_BY_TRANSACTION_ID,
        payload: transactioByTransactionId,
      });
    } catch (error) {
      dispatch({
        type: GET_TRANSACTION_BY_TRANSACTION_ID_ERROR,
        payload: error,
      });
    }
  };
