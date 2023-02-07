import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

const addBank = async (bankName, bankCode) => {
  return await axios
    .post(API_URL + "createbank", {
      bankName,
      bankCode,
    })
    .then((response) => {
      console.log(response.data);
    });
};
const getBank = async () => {
  return await axios
    .get(API_URL + "getbank")
    .then((response) => response.data.bankAccounts);
};
const BankServices = {
  addBank,
  getBank,
};

export default BankServices;
