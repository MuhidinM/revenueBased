import { combineReducers } from "redux";
import bank_accountReducer from "./bank_accountReducer";
import user_profile_reducer from "./user_profile_reducer";
// console.log(bank_accountReducer)
export default combineReducers({
  accountsList: bank_accountReducer,
  userProfile: user_profile_reducer,
});
