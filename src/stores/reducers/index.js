import { combineReducers } from "redux";
import user_profile_reducer from "./user_profile_reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import getInventoryReducer from "./getInventoryReducer";
import bank_accountReducer from "./bank_accountReducer";
import getTransactionDetailReducer from "./getTransactionDetailReducer";
import adminFetchAllTransactions from "./adminFetchAllTransactions";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userProfile", "token"],
};
const rootReducer = combineReducers({
  accountsList: bank_accountReducer,
  userProfile: user_profile_reducer,
  transactionDetail: getTransactionDetailReducer,
  transactionByTransactionId: getTransactionDetailReducer,
  transactionDetailAll: adminFetchAllTransactions,
  inventoryInfo: getInventoryReducer,
});
export default persistReducer(persistConfig, rootReducer);
