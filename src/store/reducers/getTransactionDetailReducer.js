import { GET_TRANSACTION, GET_TRANSACTION_ERROR } from "../types";

const initialState = {
  transactionDetail: {},
  loading: true,
};

export default function (state = initialState, action) {
  //   console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case GET_TRANSACTION:
      //   console.log(action.payload);
      return {
        ...state,
        transactionDetail: action.payload,
        loading: false,
      };
    case GET_TRANSACTION_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
