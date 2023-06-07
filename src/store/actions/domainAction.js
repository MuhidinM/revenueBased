import {
  ADD_DOMAIN,
  ADD_DOMAIN_ERROR,
  GET_DOMAIN,
  GET_DOMAIN_ERROR,
  SUCCESS_RESPONSE_SETTER,
  ERROR_RESPONSE_SETTER,
} from "../types";
import AuthService from "../../services/auth.service";
import DomainServices from "../../services/domain.services";
// import BankAccountServices from "../../services/bank-account.services";

export const addDomain =
  ({ user_id, name, url, interpretResponse }) =>
  async (dispatch) => {
    console.log("You are Sending This Id" + user_id, name, url);
    try {
      const addedUrls = await DomainServices.addUrls(user_id, name, url);
      console.log(addedUrls);
      if (addedUrls[1] === 200) {
        // dispatch(satResponse("success"));
        console.log("Your Endpoint is created ");
        interpretResponse({
          // message: addedUrls[0].message,
          response: "success",
          responseCode: addedUrls[1],
        });
      } else if (addedUrls[1] === 403) {
        interpretResponse({
          message: addedUrls[0].message,
          response: "error",
          responseCode: addedUrls[1],
        });
      } else if (addedUrls[1] === 401) {
        interpretResponse({
          message: addedUrls[0].message,
          response: "error",
          responseCode: addedUrls[1],
        });
      } else {
        // dispatch(satResponse("error"));
        console.log("It is Not Checking Your Credentials");
        interpretResponse({ response: "error" });
      }
      dispatch(getDomain(user_id));
      dispatch({
        type: ADD_DOMAIN,
        payload: addedUrls[0],
      });
    } catch (error) {
      dispatch({
        type: ADD_DOMAIN_ERROR,
        payload: error,
      });
    }
  };
export const getDomain = (id) => async (dispatch) => {
  console.log("Sending this Id:", id);
  try {
    const getBank = await DomainServices.getDomain(id);
    console.log(getBank);
    // dispatch(getGeneratedApiKey());
    dispatch({
      type: GET_DOMAIN,
      payload: getBank,
    });
  } catch (error) {
    dispatch({
      type: GET_DOMAIN_ERROR,
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
