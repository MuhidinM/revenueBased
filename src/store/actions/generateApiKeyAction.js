import {
  GENERATE_API_KEY,
  GENERATE_API_KEY_ERROR,
  GET_GENERATED_API_KEY,
  GET_GENERATED_API_KEY_ERROR,
} from "../types";
import AuthService from "../../services/auth.service";
// import BankAccountServices from "../../services/bank-account.services";
export const getGeneratedApiKey = (merchant_id) => async (dispatch) => {
  try {
    if (merchant_id) {
      const generatedApiKey = await AuthService.getGeneratedApiKey(
        merchant_id
      );
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
export const generateApiKey =
  ({ merchant_id, expiryDate, interpretResponse }) =>
  async (dispatch) => {
    try {
      if (merchant_id) {
        const generateNewApiKey = await AuthService.generateApiKey(
          merchant_id,
          expiryDate
        );
        if (generateNewApiKey[1] === 200) {
          interpretResponse({
            response: "success",
            responseCode: generateNewApiKey[1],
          });
        } else if (generateNewApiKey[1] === 403) {
          interpretResponse({
            message: generateNewApiKey[0].message,
            response: "error",
            responseCode: generateNewApiKey[1],
          });
        } else {
          interpretResponse({ response: "error" });
        }
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
