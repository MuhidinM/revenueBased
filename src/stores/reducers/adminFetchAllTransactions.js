import {
  COOPASS_TRANSACTION,
  GET_ADMIN_TRANSACTION_ALL,
  GET_ADMIN_TRANSACTION_ALL_ERROR,
  GET_BANK_AND_STRIPE_TRANSACTION,
  GET_CHAPPA_TRANSACTION,
  GET_EBIRR_TRANSACTION,
  GET_PAYPAL_TRANSACTION,
  GET_TRANSACTION_BY_TRANSACTION_ID,
  GET_TRANSACTION_BY_TRANSACTION_ID_ERROR,
  STRIPE_TRANSACTION,
} from "../types";

const initialState = {
  transactionDetailAll: [],
  paypalTransactions: [],
  stripeTransaction: [],
  coopassTransaction: [],
  ebirrTransactions: [],
  chappaTransactions: [],
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
    case GET_PAYPAL_TRANSACTION:
      //   console.log(action.payload);
      return {
        ...state,
        paypalTransactions: action.payload,
        loading: false,
      };
    case GET_EBIRR_TRANSACTION:
      //   console.log(action.payload);
      return {
        ...state,
        ebirrTransactions: action.payload,
        loading: false,
      };
    case COOPASS_TRANSACTION:
      //   console.log(action.payload);
      return {
        ...state,
        coopassTransaction: action.payload,
        loading: false,
      };
    case STRIPE_TRANSACTION:
      //   console.log(action.payload);
      return {
        ...state,
        stripeTransaction: action.payload,
        loading: false,
      };
    case GET_CHAPPA_TRANSACTION:
      //   console.log(action.payload);
      return {
        ...state,
        chappaTransactions: action.payload,
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
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
