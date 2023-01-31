import { GET_ACCOUNTS, ACCOUNTS_ERROR, CREATE_BAK_ACCOUNT } from "../types";

const initialState = {
  bankAccounts: [],
  message: "",
  loading: true,
};

export default function (state = initialState, action) {
  //   console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case GET_ACCOUNTS:
      //   console.log(action.payload);
      return {
        ...state,
        bankAccounts: action.payload,
        loading: false,
      };

    case CREATE_BAK_ACCOUNT:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };

    case ACCOUNTS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}