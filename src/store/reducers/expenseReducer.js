import { SET_EXPENSES } from "../types";

const initialState = {
  expenses: [],
  loading: false,
};

export default function (state = initialState, action) {
  //   console.log(state);
  //   console.log(action.payload);
  switch (action.type) {
    case SET_EXPENSES:
      //   console.log(action.payload);
      return {
        ...state,
        expenses: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
