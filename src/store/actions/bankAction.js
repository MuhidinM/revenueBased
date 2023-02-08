import { ADD_BANK, ADD_BANK_ERROR, GET_BANK, GET_BANK_ERROR } from "../types";
import AuthService from "../../services/auth.service";
import BankServices from "../../services/bank.services";
// import BankAccountServices from "../../services/bank-account.services";
export const addBank = (bankName, bankCode) => async (dispatch) => {
  try {
    const addedBank = await BankServices.addBank(bankName, bankCode);
    console.log(addedBank);
    dispatch(gateBanks());
    dispatch({
      type: ADD_BANK,
      payload: addedBank,
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
