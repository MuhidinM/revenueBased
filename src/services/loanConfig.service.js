import { NODE_API } from "../utils/API";

const CreateLoanConfig = async (data) => {
  return await NODE_API.post("/loan/create", data).then((response) => response);
};

const getLoanConfig = async (merchant_id) => {
  return await NODE_API.get(`/loan/getAll?id=${merchant_id}`).then(
    (response) => response.data
  );
};

const LoanConfigService = {
  CreateLoanConfig,
  getLoanConfig,
};

export default LoanConfigService;
