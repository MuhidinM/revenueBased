import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "test/all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "test/user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "test/mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "test/admin", { headers: authHeader() });
};

const getAllPendingBussiness = async () => {
  return await axios.get(API_URL + "test/bussinessRequest").then((response) => {
    console.log("Calling Your services");
    console.log(response.data);
    return response.data.bussinessDetail;
  });
};

const approvePendingBussinessById = (id) => {
  console.log(id);
  return axios
    .patch(
      API_URL + "test/bussinessRequest/:id",
      { id },
      { withCredentials: true, credentials: "include" }
    )
    .then((response) => {
      return [response.data, response.status];
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
      console.log(err.config);
    });
};

const headers = {
  "Content-Type": "multipart/form-data",
};
const BussinessInfoRequest = async (formData) => {
  console.log("heloo");
  console.log(formData);
  for (const value of formData) {
    console.log(value);
  }
  return await axios
    .post(API_URL + "user/vrf", formData, headers)
    .then((response) => {
      // console.log(response.data.message);
      console.log(response.data);
      return [response.data, response.status];
    });
};

const CreateUserProfile = async (formData) => {
  console.log(formData);
  for (const value of formData.values()) {
    console.log(value);
  }
  return await axios
    .post(API_URL + "user/updateProfile", formData, headers)
    .then((response) => response.data);
};

const CreateBankAccount = async (
  accountHolderName,
  accountNumber,
  bankName,
  userId
) => {
  return await axios
    .post(API_URL + "banckAccount/create", {
      accountHolderName,
      accountNumber,
      bankName,
      userId,
    })
    .then((response) => response.data);
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
};

export default UserService;
