import axios from "axios";
import { NODE_API } from "../utils/API";
const adminTransactionFetchUrl = "http://10.1.177.130:8081/payment/v1/";

const getAllTransactions = async () => {
  // console.log(adminTransactionFetchUrl);
  return await NODE_API.get("transaction/fetchAllTransaction").then(
    (response) => response.data
  );
};
const getPaypalTransactionById = async (id) => {
  // console.log(adminTransactionFetchUrl);
  return await NODE_API.get(
    `transaction/paypalTransaction?merchant_id=${id}`
  ).then((response) => response.data);
};
const getPaypalTransactions = async () => {
  // console.log(adminTransactionFetchUrl);
  return await NODE_API.get(`transaction/allpaypalTransaction`).then(
    (response) => response.data
  );
};
const getStripeandBankTransactionById = async (id, url) => {
  // console.log(adminTransactionFetchUrl);
  return await NODE_API.get(`${url}?merchant_id=${id}`).then(
    (response) => response.data
  );
};

const getStripeandBankTransaction = async (id, url) => {
  // console.log(adminTransactionFetchUrl);
  return await NODE_API.get(`${url}`).then((response) => response.data);
};
const getEbirrTransactionsById = async (id) => {
  // console.log(adminTransactionFetchUrl);
  return await NODE_API.get(
    `transaction/ebirrTransactionById?merchant_id=${id}`
  ).then((response) => response.data);
};
const getEbirrTransactions = async (id) => {
  // console.log(adminTransactionFetchUrl);
  return await NODE_API.get(`transaction/allEbirrTransactions`).then(
    (response) => response.data
  );
};

const getTransactionByTransactionId = async (clientId) => {
  // console.log("am" + transactionID);
  return await axios
    .post(adminTransactionFetchUrl + "fetchByTransactionid", {
      clientId,
    })
    .then((response) => {
      console.log(response.data);
    });
};

const getChappaTransactionsById = async (id) => {
  // console.log(adminTransactionFetchUrl);
  return await NODE_API.get(
    `transaction/chappaTransactionById?merchant_id=${id}`
  ).then((response) => response.data);
};
const getChappaTransactions = async (id) => {
  // console.log(adminTransactionFetchUrl);
  return await NODE_API.get(`transaction/allChappaTransactions`).then(
    (response) => response.data
  );
};

const FetchTransactionServices = {
  getPaypalTransactionById,
  getAllTransactions,
  getTransactionByTransactionId,
  getStripeandBankTransactionById,
  getEbirrTransactionsById,
  getPaypalTransactions,
  getStripeandBankTransaction,
  getEbirrTransactions,
  getChappaTransactions,
  getChappaTransactionsById,
};

export default FetchTransactionServices;
