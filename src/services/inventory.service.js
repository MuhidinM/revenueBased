import { NODE_API } from "../utils/API";

const headers = {
  "Content-Type": "multipart/form-data",
};

const CreateInventory = async (formData) => {
  return await NODE_API.post("/items/create", formData, headers).then(
    (response) => response
  );
};

const EditInventory = async (formData) => {
  // formData.forEach((element) => {
  //   console.log(element);
  // });
  return await NODE_API.put("/items/editItem", formData, headers).then(
    (response) => response
  );
};

const AssignInventory = async (item_id, sales_id, merchant_id) => {
  return await NODE_API.post("/items/assigntoSales", {
    item_id,
    sales_id,
    merchant_id,
  }).then((response) => response);
};

const getAllInventory = async (sales_id) => {
  return await NODE_API.get(`/items/getAll?id=${sales_id}`).then(
    (response) => response.data
  );
};

const InventoryService = {
  CreateInventory,
  getAllInventory,
  AssignInventory,
  EditInventory,
};

export default InventoryService;
