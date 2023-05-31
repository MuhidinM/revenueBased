import { SET_LOAN_CONFIG } from "../types";

const initialState = {
  loanConfigDetail: [],
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
    default:
      return state;
  }
}
