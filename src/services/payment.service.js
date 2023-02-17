import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";
const PinUrl = "http://192.168.0.172:8081/payment/v1/validatePassbook";
const pay = async (debitAccount, debitAmount) => {
  return await axios
    .post(
      API_URL + "payment",
      {
        debitAccount,
        debitAmount,
      },
      {
        params: {
          clientId: "0ace5fba-2d26-4a4d-b5b3-c9e8909aa527",
          secretKey: "3e1cda9d-425e-43cd-a42f-a7dd88d6b344",
          device_id: "09876544333",
          key: "78521e1d-155d-4177-bf5c-404cc6f2cd9d",
          callBackUrl: "http://localhost:3000/users/accounts",
        },
      }
    )
    .then((response) => {
      console.log(response.data.parsedData.STATUS, response.data.callBackUrl);
      const SuccesStatus = response.data.parsedData.STATUS;
      const callBackUrl = response.data.callBackUrl;
      return [SuccesStatus, callBackUrl];
    });
};

const verifyPin = async (username, passcode) => {
  return await axios.post(PinUrl, { passcode, username }).then((response) => {
    return response.data;
  });
};

const PaymentServices = {
  pay,
  verifyPin,
};

export default PaymentServices;
