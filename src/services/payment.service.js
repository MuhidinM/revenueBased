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
          clientId: "56416bde-9540-4f8d-ba08-4ce147c8ec60",
          secretKey: "4b711688-18dc-4f08-9898-dc8f9eec47ff",
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
