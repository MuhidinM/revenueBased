import { SET_DASHBOARD_CARD_REPORT } from "../types";

const initialState = {
  dashboardCardReport: {},
  loading: false,
};

export default function (state = initialState, action) {
  //   console.log(state);
  //   console.log(action.payload);
  switch (action.type) {
    case SET_DASHBOARD_CARD_REPORT:
      //   console.log(action.payload);
      return {
        ...state,
        dashboardCardReport: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
