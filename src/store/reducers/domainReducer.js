import {
  ADD_DOMAIN,
  ADD_DOMAIN_ERROR,
  GET_DOMAIN,
  GET_DOMAIN_ERROR,
} from "../types";

const initialState = {
  domain: {},
  domains: [],
  message: {},
  loading: true,
};

export default function (state = initialState, action) {
  //   console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case ADD_DOMAIN:
      //   console.log(action.payload);
      return {
        ...state,
        domain: action.payload,
        loading: false,
      };
    case GET_DOMAIN:
      //   console.log(action.payload);
      return {
        ...state,
        domains: action.payload,
        loading: false,
      };

    case GET_DOMAIN_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    case ADD_DOMAIN_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
