import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

const addBank = async (bankName, bankCode) => {
  console.log(bankName, bankCode);
  return await axios
    .post(API_URL + "createbank", {
      bankName,
      bankCode,
    })
    .then((response) => {
      return response.data;
    });
};
const getBank = async () => {
  return await axios.get(API_URL + "getbank").then((response) => {
    console.log(response.data.bankDetail);
    return response.data.bankDetail;
  });
};
const BankServices = {
  addBank,
  getBank,
};

export default BankServices;
