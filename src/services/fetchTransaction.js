import axios from "axios";

const baseurl = "http://localhost:8080/payment/v1/queryTransaction";
// console.log(baseurl);
const getTransaction = async () => {
  console.log(baseurl);
  return await axios.get(baseurl).then((response) => response.data);
};

const FetchTransactionServices = {
  getTransaction,
};

export default FetchTransactionServices;
