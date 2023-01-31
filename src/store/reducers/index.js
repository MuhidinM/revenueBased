import { combineReducers } from "redux";
import bank_accountReducer from "./bank_accountReducer";
// console.log(bank_accountReducer)
export default combineReducers({
  accountsList: bank_accountReducer,
});
