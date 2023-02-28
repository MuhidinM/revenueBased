import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

const addBank = async (bankName, bankCode) => {
  console.log(bankName, bankCode);
  const header = authHeader();
  console.log();
  return await axios
    .post(
      API_URL + "createbank",

      {
        bankName,
        bankCode,
      },
      { withCredentials: true, credentials: "include" }
      // { headers: authHeader() }
    )
    .then((response) => {
      return [response.data, response.status];
    })
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
const getBank = async () => {
  return await axios
    .get(API_URL + "getbank", { headers: authHeader() })
    .then((response) => {
      console.log(response.data.bankDetail);
      return response.data.bankDetail;
    });
};
const BankServices = {
  addBank,
  getBank,
};

export default BankServices;
