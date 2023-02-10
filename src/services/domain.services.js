import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

const addUrls = async (user_id, name, url) => {
  console.log(user_id);
  return await axios
    .post(API_URL + "createurl", {
      user_id,
      name,
      url,
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};
const getBank = async () => {
  return await axios.get(API_URL + "getbank").then((response) => {
    console.log(response.data.bankDetail);
    return response.data.bankDetail;
  });
};
const DomainServices = {
  addUrls,
  getBank,
};

export default DomainServices;
