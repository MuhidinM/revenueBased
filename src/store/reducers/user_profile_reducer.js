import { CREATE_USER_PROFILE, CREATE_USER_PROFILE_ERROR } from "../types";

const initialState = {
  userProfile: {},
  loading: true,
};

export default function (state = initialState, action) {
  //   console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case CREATE_USER_PROFILE:
      //   console.log(action.payload);
      return {
        ...state,
        userProfile: action.payload,
        loading: false,
      };
    case CREATE_USER_PROFILE_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
