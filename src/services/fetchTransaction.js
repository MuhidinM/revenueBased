import axios from "axios";

const baseurl = "http://192.168.0.172:8080/payment/v1/queryTransaction";
// console.log(baseurl);

const getTransaction = async () => {
  console.log(baseurl);
  return await axios.get(baseurl).then((response) => response.data);
};

const FetchTransactionServices = {
  getTransaction,
};

export default FetchTransactionServices;
