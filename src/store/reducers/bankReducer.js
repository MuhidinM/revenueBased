import {
  ADD_BANK,
  ADD_BANK_ERROR,
  GET_BANK,
  GET_BANK_ERROR,
  SUCCESS_RESPONSE_SETTER,
  ERROR_RESPONSE_SETTER,
} from "../types";

const initialState = {
  bank: {},
  banks: [],
  response: "",
  message: {},
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
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
