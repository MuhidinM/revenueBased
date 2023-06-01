import {
  GET_ACCOUNTS,
  ACCOUNTS_ERROR,
  CREATE_BAK_ACCOUNT,
  SET_PRIMARY,
  NAME_ENQ_BY_ACCNO,
  NAME_ENQ_BY_ACCNO_ERROR,
  GET_ACCOUNTS_BY_PHONE,
  GET_ACCOUNTS_BY_PHONE_ERROR,
} from "../types";
import AuthService from "../../services/auth.service";
import BankAccountServices from "../../services/bank-account.services";
export const getAccounts = () => async (dispatch) => {
  try {
    const user = AuthService.getCurrentUser();
    if (user) {
      const bankAccountByID = await BankAccountServices.getBankAccountById(
        user.user.user_id
      );
      // console.log(bankAccountByID);
      dispatch({
        type: GET_ACCOUNTS,
        payload: bankAccountByID,
      });
    }
  } catch (error) {
    dispatch({
      type: ACCOUNTS_ERROR,
      payload: error,
    });
  }
};

export const nameEnquiryByAccountNumber =
  (criteriaValue) => async (dispatch) => {
    // console.log(criteriaValue);
    try {
      const nameResponse = await BankAccountServices.nameEnquiryByAccountNumber(
        criteriaValue
      );
      // console.log(nameResponse);
      dispatch({
        type: NAME_ENQ_BY_ACCNO,
        payload: nameResponse,
      });
    } catch (error) {
      dispatch({
        type: NAME_ENQ_BY_ACCNO_ERROR,
        payload: error,
      });
    }
  };

export const setPrimaryAccount =
  ({ value, interpretResponse }) =>
  async (dispatch) => {
    // console.log(account_id);
    try {
      const user = AuthService.getCurrentUser();
      if (user) {
        // console.log(user.user.user_id);
        const setPrimaryAccount = await BankAccountServices.setPrimaryAccount(
          user.user.user_id,
          value
        );
        // console.log(setPrimaryAccount);
        if (setPrimaryAccount[1] === "200") {
          // dispatch(satResponse("success"));
          interpretResponse({
            message: "Updated",
            response: "success",
            responseCode: setPrimaryAccount[1],
          });
        } else if (setPrimaryAccount[1] === "403") {
          interpretResponse({
            message: "Not Updated",
            response: "error",
            responseCode: setPrimaryAccount[1],
          });
        } else {
          // dispatch(satResponse("error"));
          interpretResponse({ response: "error" });
        }
        dispatch(getAccounts());
        dispatch({
          type: SET_PRIMARY,
          payload: setPrimaryAccount,
        });
      }
    } catch (error) {
      dispatch({
        type: ACCOUNTS_ERROR,
        payload: error,
      });
    }
  };

export const createTutorial =
  ({ current, accountNumber, bankName, id, interpretResponse }) =>
  async (dispatch) => {
    // console.log("in redux");
    // console.log("redux " + current, accountNumber, bankName, id);
    try {
      const res = await BankAccountServices.CreateBankAccount(
        current,
        accountNumber,
        bankName,
        id
      );
      // console.log(res);
      if (res[1] === "200") {
        // dispatch(satResponse("success"));
        interpretResponse({
          message: res[0].message,
          response: "success",
          responseCode: res[1],
        });
      } else if (res[1] === "403") {
        interpretResponse({
          message: res[0].message,
          response: "error",
          responseCode: res[1],
        });
      } else {
        // dispatch(satResponse("error"));
        interpretResponse({ response: "error" });
      }
      dispatch(getAccounts());
      dispatch({
        type: CREATE_BAK_ACCOUNT,
        payload: res,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
export const getAccountByPhone =
  ({ phoneNumber, interpretResponse }) =>
  async (dispatch) => {
    // console.log("in redux");
    // console.log("redux " + phoneNumber);
    try {
      const res = await BankAccountServices.getBankAccountByPhone(phoneNumber);
      // console.log(res);
      if (res[1] === "200") {
        // dispatch(satResponse("success"));
        interpretResponse({
          message: res[0].message,
          response: "success",
          responseCode: res[1],
        });
      } else if (res[1] === "403") {
        interpretResponse({
          message: res[0].message,
          response: "error",
          responseCode: res[1],
        });
      } else {
        // dispatch(satResponse("error"));
        interpretResponse({ response: "error" });
      }
      // dispatch(getAccounts());
      dispatch({
        type: GET_ACCOUNTS_BY_PHONE,
        payload: res,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };