import {
  GET_UN_ACTIVE_BUSSINESS,
  GET_UN_ACTIVE_BUSSINESS_ERROR,
  ACTIVATE_BUSSINESS,
  ACTIVATE_BUSSINESS_ERROR,
} from "../types";

const initialState = {
  pendingBussiness: [],
  approvedBussiness: {},
  loading: true,
};

export default function (state = initialState, action) {
  //   console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case GET_UN_ACTIVE_BUSSINESS:
      //   console.log(action.payload);
      return {
        ...state,
        pendingBussiness: action.payload,
        loading: false,
      };

    case ACTIVATE_BUSSINESS:
      //   console.log(action.payload);
      return {
        ...state,
        approvedBussiness: action.payload,
        loading: false,
      };

    case ACTIVATE_BUSSINESS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case GET_UN_ACTIVE_BUSSINESS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
