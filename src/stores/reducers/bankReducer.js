import {
  ADD_BANK,
  ADD_BANK_ERROR,
  GET_BANK,
  GET_BANK_ERROR,
  SUCCESS_RESPONSE_SETTER,
  ERROR_RESPONSE_SETTER,
  GET_PAYMENT_SERVICE,
} from "../types";

const initialState = {
  bank: {},
  banks: [],
  response: "",
  message: {},
  paymentService: [],
  loading: true,
};

export default function (state = initialState, action) {
  //   console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case ADD_BANK:
      console.log(action.payload);
      return {
        ...state,
        bank: action.payload,
        loading: false,
      };
    case GET_BANK:
      //   console.log(action.payload);
      return {
        ...state,
        banks: action.payload,
        loading: false,
      };
    case SUCCESS_RESPONSE_SETTER:
      //   console.log(action.payload);
      return {
        ...state,
        response: action.payload,
        loading: false,
      };
    case ERROR_RESPONSE_SETTER:
      //   console.log(action.payload);
      return {
        ...state,
        response: action.payload,
        loading: false,
      };
    case GET_BANK_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case ADD_BANK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_PAYMENT_SERVICE:
      return {
        ...state,
        loading: false,
        paymentService: action.payload,
      };
    default:
      return state;
  }
}
