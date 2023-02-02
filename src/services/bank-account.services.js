import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/banckAccount/";

const getBankAccountById = async (id) => {
  console.log(id);
  return await axios
    .get(API_URL + `accountById/${id}`)
    .then((response) => response.data.bankAccounts);
};

const setPrimaryAccount = async (userId, account_id) => {
  console.log(account_id, userId);
  return await axios
    .patch(API_URL + `setPrimary/`, { account_id, userId })
    .then((response) => response.data.bankAccounts);
};

const CreateBankAccount = async (
  accountHolderName,
  accountNumber,
  bankName,
  userId
) => {
  console.log(userId);
  return await axios
    .post(API_URL + "create", {
      accountHolderName,
      accountNumber,
      bankName,
      userId,
    })
    .then((response) => response.data);
};

const BankAccountServices = {
  CreateBankAccount,
  getBankAccountById,
  setPrimaryAccount,
};

export default BankAccountServices;
