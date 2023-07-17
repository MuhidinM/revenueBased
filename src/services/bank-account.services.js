import axios from "axios";
import { NODE_API } from "../utils/API";
const API_URL = process.env.REACT_APP_API_NODE_URLS;
const SPRING_ENDPOINT = process.env.REACT_APP_API_SPRING_URLS;
const accountByPhoneEndpoint = "http://192.168.14.136:7090/userinfo";
const otpEndpoint = "http://192.168.14.43:8081/payment/v1/";
const getBankAccountById = async (id) => {
  console.log(id);
  return await NODE_API.get(`/eky/account?merchant_id=${id}`).then(
    (response) => response.data.account_number
  );
};

const setPrimaryAccount = async (merchant_id, bank_account_id) => {
  console.log(merchant_id, bank_account_id);
  return await NODE_API.patch(`/eky/setPrimaryAccount`, {
    merchant_id,
    bank_account_id,
  })
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
  return await NODE_API.post("/user/sendOtp", { Mobile: mobile }).then(
    (response) => response.data
  );
};
const getBankAccountByPhone = async (mobile) => {
  console.log(mobile);
  return await axios
    .post(process.env.REACT_APP_API_USER_INFO + "", { mobile })
    .then((response) => response.data);
};

const confirmOtp = async (mobile, otpValue) => {
  console.log(mobile);
  console.log(otpValue);
  const response = await NODE_API.post("/user/verifyOtp", {
    Mobile: mobile,
    Text: otpValue,
  });
  let data = response.data;
  return data;
};
const nameEnquiryByAccountNumber = async (criteriaValue) => {
  console.log("Account number:" + criteriaValue);
  const res = await axios.post(SPRING_ENDPOINT + "customerNameByAccno", {
    criteriaValue,
  });
  let data = res.data.AccountDetailsResponse.name;
  return data;
};
const accountByPhone = async (phoneNumber) => {
  const res = await NODE_API.post("/user/userinfo", { phoneNumber });
  console.log(res.data.userInfo.accounts);
  return [res.status, res.data.userInfo.accounts];
};

const CreateBankAccount = async (
  accountHolderName,
  accountNumber,
  bankName,
  merchant_id,
  phone_number
) => {
  console.log(
    "create bank Account Parametre",
    accountHolderName,
    accountNumber,
    bankName,
    merchant_id,
    phone_number
  );
  return await NODE_API.post("/eky/account", {
    accountHolderName,
    account_number: accountNumber,
    bankName,
    merchant_id,
    phone_number,
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
  accountByPhone,
};

export default BankAccountServices;
