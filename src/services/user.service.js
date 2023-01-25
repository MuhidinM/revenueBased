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
  return await axios
    .get(API_URL + "test/bussinessRequest")
    .then((response) => response.data.bussinessDetail);
};

const getPendingBussinessById = () => {
  return axios
    .get(API_URL + "test/bussinessRequest/:id")
    .then((response) => response.json())
    .then((bussinessDetail) => {
      console.log(bussinessDetail);
    });
};

const headers = {
  "Content-Type": "multipart/form-data",
  
};
const BussinessInfoRequest = (formData) => {
  console.log(formData);

  return axios
    .post(API_URL + "user/vrf", formData, headers)
    .then((response) => {
      // console.log(response.data.message);
      return response.data;
    });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  BussinessInfoRequest,
  getAllPendingBussiness,
  getPendingBussinessById,
};

export default UserService;
