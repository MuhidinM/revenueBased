import { NODE_API } from "../utils/API";

const headers = {
  "Content-Type": "multipart/form-data",
};

const CreateInventory = async (formData, setUpdated, updated) => {
  return await NODE_API.post("/items/create", formData, headers).then(
    (response) => {
      setUpdated(!updated);
      return response;
    }
  );
};

const EditInventory = async (formData, setUpdated, updated) => {
  // formData.forEach((element) => {
  //   console.log(element);
  // });
  return await NODE_API.put("/items/editItem", formData, headers).then(
    (response) => {
      setUpdated(!updated);
      return response;
    }
  );
};
const ToggleStatus = async (row, setToggeled, toggeled) => {
  return await NODE_API.put("/items/editItemStatus", {
    item_id: row.item_id,
    merchant_id: row.merchant_id,
    status: !row.status,
  }).then((response) => {
    setToggeled(!toggeled);
    return response;
  });
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
  ToggleStatus,
};

export default InventoryService;
