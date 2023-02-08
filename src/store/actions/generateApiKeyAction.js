import {
  GENERATE_API_KEY,
  GENERATE_API_KEY_ERROR,
  GET_GENERATED_API_KEY,
  GET_GENERATED_API_KEY_ERROR,
} from "../types";
import AuthService from "../../services/auth.service";
// import BankAccountServices from "../../services/bank-account.services";
export const getGeneratedApiKey = () => async (dispatch) => {
  try {
    const user = AuthService.getCurrentUser();
    if (user) {
      const generatedApiKey = await AuthService.getGeneratedApiKey(user.id);
      console.log(generatedApiKey);
      //   dispatch(getAccounts());
      dispatch({
        type: GET_GENERATED_API_KEY,
        payload: generatedApiKey,
      });
    }
  } catch (error) {
    dispatch({
      type: GET_GENERATED_API_KEY_ERROR,
      payload: error,
    });
  }
};
export const generateApiKey = (account_id, expiryDate) => async (dispatch) => {
  console.log(account_id);
  try {
    const user = AuthService.getCurrentUser();
    if (user) {
      const generateNewApiKey = await AuthService.generateApiKey(
        account_id,
        expiryDate
      );
      console.log(generateNewApiKey);
        dispatch(getGeneratedApiKey());
      dispatch({
        type: GENERATE_API_KEY,
        payload: generateNewApiKey,
      });
    }
  } catch (error) {
    dispatch({
      type: GENERATE_API_KEY_ERROR,
      payload: error,
    });
  }
};
