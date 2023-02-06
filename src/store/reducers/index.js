import { combineReducers } from "redux";
import bank_accountReducer from "./bank_accountReducer";
import user_profile_reducer from "./user_profile_reducer";
import generate_api_key_reducer from "./generateApiKeyReducer";
// console.log(bank_accountReducer)
export default combineReducers({
  accountsList: bank_accountReducer,
  userProfile: user_profile_reducer,
  apiKey: generate_api_key_reducer,
});
