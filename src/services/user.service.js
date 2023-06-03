import axios from "axios";
import AuthHeader from "./auth-header";
import { NODE_API } from "../utils/API";

const API_URL = process.env.REACT_APP_API_NODE_URLS;

const getPublicContent = () => {
  return axios.get(API_URL + "api/test/all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "api/test/user", { headers: AuthHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "api/test/mod", { headers: AuthHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "api/test/admin", { headers: AuthHeader() });
};

const getAllPendingBussiness = async () => {
  return await axios
    .get(API_URL + "api/test/bussinessRequest")
    .then((response) => {
      console.log("Calling Your services");
      console.log(response.data);
      return response.data.bussinessDetail;
    });
};

const approvePendingBussinessById = async (id) => {
  console.log(id);
  try {
    const response = await axios.patch(
      API_URL + "api/test/bussinessRequest/:id",
      { id },
      { withCredentials: true, credentials: "include" }
    );
    return [response.data, response.status];
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log("Error", err.message);
    }
    console.log(err.config);
  }
};

const headers = {
  "Content-Type": "multipart/form-data",
};
const BussinessInfoRequest = async (formData) => {
  // console.log("heloo");
  // console.log(formData);
  for (const value of formData) {
    console.log(value);
  }
  return await axios
    .post(API_URL + "api/user/vrf", formData, headers)
    .then((response) => {
      // console.log(response.data.message);
      // console.log(response.data);
      return [response.data, response.status];
    });
};

const CreateUserProfile = async (formData) => {
  // console.log(formData);
  // for (const value of formData.values()) {
  //   console.log(value);
  // }
  return await axios
    .post(API_URL + "api/user/updateProfile", formData, headers)
    .then((response) => response.data);
};

const CreateBankAccount = async (
  accountHolderName,
  accountNumber,
  bankName,
  userId
) => {
  return await axios
    .post(API_URL + "api/banckAccount/create", {
      accountHolderName,
      accountNumber,
      bankName,
      userId,
    })
    .then((response) => response.data);
};

const CreateSales = async (username, merchant_id) => {
  // console.log("username", username);
  return await NODE_API.post("/sales/register", {
    username,
    merchant_id,
  }).then((response) => console.log("success"));
};

const getAllSales = async (merchant_id) => {
  return await NODE_API.get(`/sales/getAll?id=${merchant_id}`).then(
    (response) => response.data
  );
};
const getEkyDetail = async (merchant_id) => {
  return await NODE_API.get(`/eky/getKyc?merchant_id=${merchant_id}`).then(
    (response) => response.data
  );
};

const getSalesKycDetail = async (merchant_id) => {
  return await NODE_API.get(`/sales/getAllKyc?merchant_id=${merchant_id}`).then(
    (response) => response.data
  );
};

const approveSales = async (sales_kyc_id, merchant_id) => {
  return await NODE_API.put(`/sales/approveKyc`, {
    sales_kyc_id,
    merchant_id,
  }).then((response) => response.data);
};
const rejectSales = async (sales_kyc_id, merchant_id) => {
  return await NODE_API.put(`/sales/rejectKyc`, {
    sales_kyc_id,
    merchant_id,
  }).then((response) => response.data);
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  BussinessInfoRequest,
  getAllPendingBussiness,
  approvePendingBussinessById,
  CreateBankAccount,
  CreateUserProfile,
  CreateSales,
  getAllSales,
  getEkyDetail,
  getSalesKycDetail,
  approveSales,
  rejectSales,
};

export default UserService;
