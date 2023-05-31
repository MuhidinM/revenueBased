import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_NODE_URLS;

const addBank = async (bankName, bankCode) => {
  console.log(bankName, bankCode);

  console.log();
  return await axios
    .post(
      API_URL + "api/createbank",

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
    .get(API_URL + "api/getbank", { headers: authHeader() })
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
