import {
  CREATE_USER_PROFILE,
  CREATE_USER_PROFILE_ERROR,
  LOGGED_IN_USER_DETAIL,
  LOGGED_IN_USER_DETAIL_ERROR,
  SET_USER_NAME,
  SET_USER_ID,
  SET_TOKEN,
  GET_EKY_DETAIL,
  LOADING,
  GET_EKY_DETAIL_ERROR,
} from "../types";

const initialState = {
  userProfile: {},
  userDetail: {},
  loading: false,
  userID: null,
  username: null,
  token: null,
  kyc: null,
};

export default function (state = initialState, action) {
  //   console.log(state);
  // console.log(action.payload);
  switch (action.type) {
    case CREATE_USER_PROFILE:
      //   console.log(action.payload);
      return {
        ...state,
        userProfile: action.payload,
        loading: false,
      };
    case LOGGED_IN_USER_DETAIL:
      //   console.log(action.payload);
      return {
        ...state,
        userDetail: action.payload,
        loading: false,
      };
    case CREATE_USER_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_USER_ID:
      return {
        ...state,
        userID: action.payload,
      };
    case SET_USER_NAME:
      return {
        ...state,
        username: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case LOGGED_IN_USER_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_EKY_DETAIL:
      return {
        ...state,
        kyc: action.payload,
        loading: false,
      };
    case GET_EKY_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        kyc: null,
      };
    default:
      return state;
  }
}
