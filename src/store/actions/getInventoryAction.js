import { SET_INVENTORY, SET_PRODUCTS } from "../types";

import InventoryService from "../../services/inventory.service";
export const getInventoryDetail = (userID) => async (dispatch) => {
  try {
    // const user = AuthService.getCurrentUser();
    console.log("running");
    const inventoryDetail = await InventoryService.getAllInventory(userID);
    console.log(inventoryDetail);
    dispatch({
      type: SET_INVENTORY,
      payload: inventoryDetail,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProductDetails = () => async (dispatch) => {
  try {
    // const user = AuthService.getCurrentUser();
    console.log("running");
    const productDetails = await InventoryService.getAllProducts();
    dispatch({
      type: SET_PRODUCTS,
      payload: productDetails,
    });
  } catch (error) {
    console.log(error);
  }
};
