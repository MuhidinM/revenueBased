import { combineReducers } from "redux";
import bank_accountReducer from "./bank_accountReducer";
import user_profile_reducer from "./user_profile_reducer";
import getTransactionDetailReducer from "./getTransactionDetailReducer";
import generate_api_key_reducer from "./generateApiKeyReducer";
import bankReducer from "./bankReducer";
import adminFetchAllTransactions from "./adminFetchAllTransactions";
import deviceManagementReducer from "./deviceManagementReducer";
import domainReducer from "./deviceManagementReducer";
// console.log(bank_accountReducer)
export default combineReducers({
  accountsList: bank_accountReducer,
  userProfile: user_profile_reducer,
  apiKey: generate_api_key_reducer,
  transactionDetail: getTransactionDetailReducer,
  transactionByTransactionId: getTransactionDetailReducer,
  transactionDetailAll: adminFetchAllTransactions,
  deviceDetail: deviceManagementReducer,
  bankInfo: bankReducer,
  domain: domainReducer,
});
