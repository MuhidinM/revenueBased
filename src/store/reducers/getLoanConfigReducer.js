import { SET_LOAN_CONFIG, SET_LOAN_PDF, SET_LOAN_REQUEST } from "../types";

const initialState = {
  loanConfigDetail: [],
  loanRequest: [],
  loanPdf: "",
  loading: true,
};

export default function (state = initialState, action) {
  //   console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case SET_LOAN_CONFIG:
      //   console.log(action.payload);
      return {
        ...state,
        loanConfigDetail: action.payload,
        loading: false,
      };
    case SET_LOAN_REQUEST:
      //   console.log(action.payload);
      return {
        ...state,
        loanRequest: action.payload,
        loading: false,
      };
    case SET_LOAN_PDF:
      //   console.log(action.payload);
      return {
        ...state,
        loanPdf: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
