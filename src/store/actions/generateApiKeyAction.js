import { GENERATE_API_KEY, GENERATE_API_KEY_ERROR } from "../types";
import AuthService from "../../services/auth.service";
// import BankAccountServices from "../../services/bank-account.services";

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
      //   dispatch(getAccounts());
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
