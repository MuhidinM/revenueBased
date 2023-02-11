import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://192.168.0.126:5000/api/";

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
const getDomain = async () => {
  return await axios.get(API_URL + "getdomain").then((response) => {
    console.log(response.data.bankDetail);
    return response.data.urlDetail;
  });
};
const DomainServices = {
  addUrls,
  getDomain,
};

export default DomainServices;
