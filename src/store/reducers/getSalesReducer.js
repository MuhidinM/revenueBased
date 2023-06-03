import { GET_SALES_KYC, SET_SALES } from "../types";

const initialState = {
  salesDetail: [],
  salesKyc: [],
  loading: true,
};

export default function (state = initialState, action) {
  //   console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case SET_SALES:
      return {
        ...state,
        salesDetail: action.payload,
        loading: false,
      };
    case GET_SALES_KYC:
      return {
        ...state,
        salesKyc: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
