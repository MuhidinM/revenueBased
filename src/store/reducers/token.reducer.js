import { GET_TOKEN } from "../types";

const initialState = {
  token: "",
  loading: true,
};

export default function (state = initialState, action) {
  console.log("state", action.payload);
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
