import { GENERATE_API_KEY, GENERATE_API_KEY_ERROR } from "../types";

const initialState = {
  apiKey: [],
  loading: true,
};

export default function (state = initialState, action) {
  //   console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case GENERATE_API_KEY:
      console.log(action.payload);
      return {
        ...state,
        apiKey: action.payload,
        loading: false,
      };

    case GENERATE_API_KEY_ERROR:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
