import axios from "axios";

// const baseurl = "http://192.168.0.173:8080/payment/v1/queryTransaction";
const adminTransactionFetchUrl = "http://10.1.177.130:8081/payment/v1/";
// console.log(baseurl);

// const getTransaction = async () => {
//   console.log(baseurl);
//   return await axios.get(baseurl).then((response) => response.data);
// };
const getAdminTransactionsAall = async () => {
  // console.log(adminTransactionFetchUrl);
  return await axios
    .get(adminTransactionFetchUrl + "fetchAllTransaction")
    .then((response) => response.data);
};

const getTransactionByTransactionId = async (transactionID) => {
  // console.log("am" + transactionID);
  return await axios
    .post(adminTransactionFetchUrl + "fetchByTransactionid", {
      transactionID,
    })
    .then((response) => {
      console.log(response.data);
    });
};

const FetchTransactionServices = {
  // getTransaction,
  getAdminTransactionsAall,
  getTransactionByTransactionId,
};

export default FetchTransactionServices;
