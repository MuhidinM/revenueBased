import { NODE_API } from "../utils/API";

const headers = {
  "Content-Type": "multipart/form-data",
};

const CreateKYC = async (formData) => {
  return await NODE_API.post("/eky/create", formData, headers).then(
    (response) => response
  );
};
// const AssignInventory = async (item_id, sales_id, merchant_id) => {
//   return await NODE_API.post("/items/assigntoSales", {
//     item_id,
//     sales_id,
//     merchant_id,
//   }).then((response) => response);
// };

// const getAllInventory = async (sales_id) => {
//   return await NODE_API.get(`/sales/getAll?id=${sales_id}`).then(
//     (response) => response.data
//   );
// };

const KYCService = {
  CreateKYC,
};

export default KYCService;
