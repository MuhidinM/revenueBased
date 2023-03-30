import axios from "axios";
const API_URL = process.env.REACT_APP_API_NODE_URLS;
const SPRING_ENDPOINT = process.env.REACT_APP_API_SPRING_URLS;
const getBankAccountById = async (id) => {
  console.log(id);
  return await axios
    .get(API_URL + `api/banckAccount/accountById/${id}`)
    .then((response) => response.data.bankAccounts);
};

const setPrimaryAccount = async (userId, account_id) => {
  console.log(account_id, userId);
  return await axios
    .patch(API_URL + `api/banckAccount/setPrimary/`, { account_id, userId })
    .then((response) => [response.data.bankAccounts, response.status])
    .catch((err) => {
      if (err.response) {
        return [err.response.data, err.response.status];
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
      console.log(err.config);
    });
};

const activateAccount = async (id, acId) => {
  console.log(id, acId);
  return await axios
    .get(API_URL + `api/banckAccount/activateAccount?&id=${id}&acId=${acId}`)
    .then((response) => response.data.message);
};

const sendOtp = async (mobile) => {
  console.log(mobile);
  return await axios
    .post(SPRING_ENDPOINT + "sendOtp", { mobile })
    .then((response) => response.data);
};
const getBankAccountByPhone = async (mobile) => {
  console.log(mobile);
  return await axios
    .post(SPRING_ENDPOINT + "" , { mobile })
    .then((response) => response.data);
};

const confirmOtp = async (mobile, text) => {
  console.log(mobile);
  console.log(text);
  const response = await axios.post(SPRING_ENDPOINT + "otpVerification", { mobile, text });
  let data = response.data;
  return data;
};
const nameEnquiryByAccountNumber = async (criteriaValue) => {
  console.log("Account number:" + criteriaValue);
  const res = await axios.post(SPRING_ENDPOINT + 'customerNameByAccno', { criteriaValue });
  let data = res.data.AccountDetailsResponse.name;
  return data;
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
    .then((response) => {
      console.log("Your Response IS:", response.data);
      return [response.data, response.status];
    })
    .catch((err) => {
      if (err.response) {
        console.log("Error Response", err.response);
        return [err.response.data, err.response.status];
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
      console.log(err.config);
    });
};

const BankAccountServices = {
  CreateBankAccount,
  getBankAccountById,
  setPrimaryAccount,
  sendOtp,
  confirmOtp,
  activateAccount,
  nameEnquiryByAccountNumber,
  getBankAccountByPhone,
};

export default BankAccountServices;
