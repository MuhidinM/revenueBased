import { NODE_API } from "../utils/API";

const CreateLoanConfig = async (data) => {
  return await NODE_API.post("/loan/create", data).then((response) => response);
};

const getLoanConfig = async (merchant_id) => {
  return await NODE_API.get(`/loan/getAll?id=${merchant_id}`).then(
    (response) => response.data
  );
};
const AssignLoanConfig = async (item_id, loan_conf_id, merchant_id) => {
  return await NODE_API.post("/items/assigntoSales", {
    item_id,
    loan_conf_id,
    merchant_id,
  }).then((response) => response);
};

const LoanConfigService = {
  CreateLoanConfig,
  getLoanConfig,
  AssignLoanConfig,
};

export default LoanConfigService;
