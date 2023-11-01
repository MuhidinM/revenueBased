import { SET_INVENTORY, SET_PRODUCTS } from "../types";

const initialState = {
  inventoryDetail: [],
  productsDetail: [],
  loading: true,
};

export default function (state = initialState, action) {
  //   console.log(state);
  // console.log(action.payload);
  switch (action.type) {
    case SET_INVENTORY:
      //   console.log(action.payload);
      return {
        ...state,
        inventoryDetail: action.payload,
        loading: false,
      };
    case SET_PRODUCTS:
      //   console.log(action.payload);
      return {
        ...state,
        productsDetail: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
