import { SET_INVENTORY } from "../types";

const initialState = {
  inventoryDetail: [],
  loading: true,
};

export default function (state = initialState, action) {
  //   console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case SET_INVENTORY:
      //   console.log(action.payload);
      return {
        ...state,
        inventoryDetail: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
