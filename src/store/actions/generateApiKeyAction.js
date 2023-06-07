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
    console.log("The User is:", user.user.user_id);
    if (user) {
      const generatedApiKey = await AuthService.getGeneratedApiKey(
        user.user.user_id
      );
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
export const generateApiKey =
  ({ email, expiryDate, interpretResponse }) =>
  async (dispatch) => {
    console.log(email);
    try {
      const user = AuthService.getCurrentUser();
      if (user) {
        const generateNewApiKey = await AuthService.generateApiKey(
          email,
          expiryDate
        );
        if (generateNewApiKey[1] === 200) {
          // dispatch(satResponse("success"));
          console.log("Your Endpoint is created ");
          interpretResponse({
            // message: addedUrls[0].message,
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
          // dispatch(satResponse("error"));
          console.log("It is Not Checking Your Credentials");
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
