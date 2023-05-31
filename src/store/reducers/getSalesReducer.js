import { SET_SALES } from "../types";

const initialState = {
  salesDetail: [],
  loading: true,
};

export default function (state = initialState, action) {
  //   console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case SET_SALES:
      //   console.log(action.payload);
      return {
        ...state,
        salesDetail: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
