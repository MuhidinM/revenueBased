import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://10.1.177.130:5000/api/";
const SpringUrl = "http://10.1.177.130:8081/payment/v1/";
const pay = async (debitAccount, debitAmount, clientId, secretKey, key) => {
  return await axios
    .post(
      API_URL + "payment",
      {
        debitAccount,
        debitAmount,
      },
      {
        params: {
          clientId: clientId,
          secretKey: secretKey,
          device_id: "09876544333",
          key: key,
          callBackUrl: "http://10.1.177.130:3000/users/accounts",
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
  return await axios
    .post(SpringUrl + "validatePassbook", { passcode, username })
    .then((response) => {
      return response.data;
    });
};

const logPayPalResponse = async (
  orderId,
  status,
  amountValue,
  currency_code,
  payeeEmail,
  payeeMerchant_id,
  description,
  transactionId,
  create_time,
  update_time,
  payerGiven_name,
  payerSurname,
  payerEmailAddress,
  payer_id,
  payerCountry_code,
  linksHref
) => {
  return await axios
    .post(SpringUrl + "payPalTransaction", {
      orderId,
      status,
      amountValue,
      currency_code,
      payeeEmail,
      payeeMerchant_id,
      description,
      transactionId,
      create_time,
      update_time,
      payerGiven_name,
      payerSurname,
      payerEmailAddress,
      payer_id,
      payerCountry_code,
      linksHref,
    })
    .then((response) => {
      return response.data;
    });
};

const PaymentServices = {
  pay,
  verifyPin,
  logPayPalResponse,
};

export default PaymentServices;
