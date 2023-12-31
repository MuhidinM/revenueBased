import {
  ADD_BANK,
  ADD_BANK_ERROR,
  GET_BANK,
  GET_BANK_ERROR,
  SUCCESS_RESPONSE_SETTER,
  ERROR_RESPONSE_SETTER,
  GET_PAYMENT_SERVICE,
} from "../types";
import AuthService from "../../services/auth.service";
import BankServices from "../../services/bank.services";
// import BankAccountServices from "../../services/bank-account.services";
export const addBank =
  ({ bankName, bankCode, interpretResponse }) =>
  async (dispatch) => {
    try {
      const addedBank = await BankServices.addBank(bankName, bankCode);
      console.log(addedBank[0]);
      // eslint-disable-next-line eqeqeq
      if (addedBank[1] == "201") {
        // dispatch(satResponse("success"));
        interpretResponse({
          message: addedBank[0].message,
          response: "error",
          responseCode: addedBank[1],
        });
      } else if (addedBank[1] == "403") {
        interpretResponse({
          message: addedBank[0].message,
          response: "error",
          responseCode: addedBank[1],
        });
      } else {
        // dispatch(satResponse("error"));
        interpretResponse({ response: "error" });
      }

      dispatch(gateBanks());
      dispatch({
        type: ADD_BANK,
        payload: addedBank[0],
      });
    } catch (error) {
      dispatch({
        type: ADD_BANK_ERROR,
        payload: error,
      });
    }
  };

export const addPaymentService =
  ({ serviceName, interpretResponse }) =>
  async (dispatch) => {
    try {
      const addedBank = await BankServices.addPaymentService(serviceName);
      console.log(addedBank[0]);
      // eslint-disable-next-line eqeqeq
      if (addedBank[1] == "201") {
        // dispatch(satResponse("success"));
        interpretResponse({
          message: addedBank[0].message,
          response: "error",
          responseCode: addedBank[1],
        });
      } else if (addedBank[1] == "403") {
        interpretResponse({
          message: addedBank[0].message,
          response: "error",
          responseCode: addedBank[1],
        });
      } else {
        // dispatch(satResponse("error"));
        interpretResponse({ response: "error" });
      }

      dispatch(getPaymentService());
      dispatch({
        type: ADD_BANK,
        payload: addedBank[0],
      });
    } catch (error) {
      console.log(error);
    }
  };
export const updatePaymentService =
  (serviceName, interpretResponse) => async (dispatch) => {
    try {
      const addedBank = await BankServices.updatePaymentService(serviceName);
      console.log(addedBank[0]);
      // eslint-disable-next-line eqeqeq
      const getBank = await BankServices.getService();
      // console.log("Getting Banks", getBank);
      // dispatch(getGeneratedApiKey());
      dispatch({
        type: GET_PAYMENT_SERVICE,
        payload: getBank,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const gateBanks = () => async (dispatch) => {
  try {
    const getBank = await BankServices.getBank();
    console.log("Getting Banks", getBank);
    // dispatch(getGeneratedApiKey());
    dispatch({
      type: GET_BANK,
      payload: getBank,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getPaymentService = () => async (dispatch) => {
  try {
    const getBank = await BankServices.getService();
    // console.log("Getting Banks", getBank);
    // dispatch(getGeneratedApiKey());
    dispatch({
      type: GET_PAYMENT_SERVICE,
      payload: getBank,
    });
  } catch (error) {
    console.log(error);
  }
};
