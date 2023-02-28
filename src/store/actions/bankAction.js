import {
  ADD_BANK,
  ADD_BANK_ERROR,
  GET_BANK,
  GET_BANK_ERROR,
  SUCCESS_RESPONSE_SETTER,
  ERROR_RESPONSE_SETTER,
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
      if (addedBank[1] == "200") {
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
      console.log("status" + addedBank[1]);
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
export const gateBanks = () => async (dispatch) => {
  try {
    const getBank = await BankServices.getBank();
    console.log(getBank);
    // dispatch(getGeneratedApiKey());
    dispatch({
      type: GET_BANK,
      payload: getBank,
    });
  } catch (error) {
    dispatch({
      type: GET_BANK_ERROR,
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
