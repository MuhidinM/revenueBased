import { ADD_BANK, ADD_BANK_ERROR, GET_BANK, GET_BANK_ERROR } from "../types";
import AuthService from "../../services/auth.service";
// import BankAccountServices from "../../services/bank-account.services";
export const addBank = () => async (dispatch) => {
  try {
    const user = AuthService.getCurrentUser();
    if (user) {
      const generatedApiKey = await AuthService.getGeneratedApiKey(user.id);
      console.log(generatedApiKey);
      //   dispatch(getAccounts());
      dispatch({
        type: ADD_BANK,
        payload: generatedApiKey,
      });
    }
  } catch (error) {
    dispatch({
      type: ADD_BANK_ERROR,
      payload: error,
    });
  }
};
export const gateBanks = () => async (dispatch) => {
  try {
    const user = AuthService.getCurrentUser();
    if (user) {
      const generateNewApiKey = await AuthService.generateApiKey();
      console.log(generateNewApiKey);
      //   dispatch(getGeneratedApiKey());
      dispatch({
        type: GET_BANK,
        payload: generateNewApiKey,
      });
    }
  } catch (error) {
    dispatch({
      type: GET_BANK_ERROR,
      payload: error,
    });
  }
};
