import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

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
          clientId: "5b5433ad-21df-46f5-a873-a540a0373bc1",
          secretKey: "95f838bd-2c7d-40f7-ab0a-121814b81871",
        },
      }
    )
    .then((response) => {
      console.log(response.data.STATUS);
    });
};

const PaymentServices = {
  pay,
};

export default PaymentServices;
