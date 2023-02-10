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
          clientId: "22c8b1c9-2591-4d57-a35b-e12308e4153f",
          secretKey: "37526966-bb75-41f5-9e31-3b8f7227e4f7",
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
