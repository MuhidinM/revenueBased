import axios from "axios";
const API_URL = process.env.REACT_APP_API_NODE_URLS;
const SpringUrl = process.env.REACT_APP_API_SPRING_URLS;
const CoopasEndPoint = "http://10.1.177.125:9000/api/accounts/getPrimaryAccount";
const pay = async (debitAccount, debitAmount, clientId, secretKey, key) => {
  console.log(debitAmount)
  return await axios
    .post(
      API_URL + "api/payment",
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

const verifyPin = async (phoneNumber, passcode) => {
  return await axios
    .post(CoopasEndPoint, { passcode, phoneNumber })
    .then((response) => {
      return [response.status,response.data];
    }).catch((error)=>console.log(error));
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
