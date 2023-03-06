import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://10.1.177.130:5000/api/banckAccount/";
const OTP_URL = "http://10.1.177.130:8081/payment/v1/sendOtp";
const OTP_URL_CONFIRMATION =
  "http://10.1.177.130:8081/payment/v1/otpVerification";
const NAME_ENQ_URL = "http://10.1.177.130:8081/payment/v1/customerNameByAccno";
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
    .get(API_URL + `activateAccount?&id=${id}&acId=${acId}`)
    .then((response) => response.data.message);
};

const sendOtp = async (mobile) => {
  console.log(mobile);
  return await axios
    .post(OTP_URL, { mobile })
    .then((response) => response.data);
};

const confirmOtp = async (mobile, text) => {
  console.log(mobile);
  console.log(text);
  const response = await axios.post(OTP_URL_CONFIRMATION, { mobile, text });
  let data = response.data;
  return data;
};
const nameEnquiryByAccountNumber = async (criteriaValue) => {
  console.log("Account number:" + criteriaValue);
  const res = await axios.post(NAME_ENQ_URL, { criteriaValue });
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
};

export default BankAccountServices;
