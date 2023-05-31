import { SET_INVENTORY } from "../types";
// import AuthService from "../../services/auth.service";

import InventoryService from "../../services/inventory.service";
export const getInventoryDetail = (userID) => async (dispatch) => {
  try {
    // const user = AuthService.getCurrentUser();
    // console.log("running");
    const inventoryDetail = await InventoryService.getAllInventory(userID);
    // console.log(inventoryDetail);
    dispatch({
      type: SET_INVENTORY,
      payload: inventoryDetail,
    });
  } catch (error) {
    console.log(error);
  }
};
