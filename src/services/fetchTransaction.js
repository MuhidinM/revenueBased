import axios from "axios";
const adminTransactionFetchUrl = "http://10.1.177.130:8081/payment/v1/";

const getAllTransactions = async () => {
  // console.log(adminTransactionFetchUrl);
  return await axios
    .get(adminTransactionFetchUrl + "fetchAllTransaction")
    .then((response) => response.data);
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

const FetchTransactionServices = {
  // getTransaction,
  getAllTransactions,
  getTransactionByTransactionId,
};

export default FetchTransactionServices;
