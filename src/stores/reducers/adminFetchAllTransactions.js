import {
  GET_ADMIN_TRANSACTION_ALL,
  GET_ADMIN_TRANSACTION_ALL_ERROR,
  GET_TRANSACTION_BY_TRANSACTION_ID,
  GET_TRANSACTION_BY_TRANSACTION_ID_ERROR,
} from "../types";

const initialState = {
  transactionDetailAll: [],
  transactionByTransactionId: {},
  loading: true,
};

export default function (state = initialState, action) {
  //   console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case GET_ADMIN_TRANSACTION_ALL:
      //   console.log(action.payload);
      return {
        ...state,
        transactionDetailAll: action.payload,
        loading: false,
      };
    case GET_TRANSACTION_BY_TRANSACTION_ID:
      //   console.log(action.payload);
      return {
        ...state,
        transactionByTransactionId: action.payload,
        loading: false,
      };
    case GET_TRANSACTION_BY_TRANSACTION_ID_ERROR:
      //   console.log(action.payload);
      return {
        ...state,

        loading: false,
        error: action.payload,
      };
    case GET_ADMIN_TRANSACTION_ALL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
