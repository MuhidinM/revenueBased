import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

const addUrls = async (user_id, name, url) => {
  console.log(user_id);
  return await axios
    .post(
      API_URL + "createurl",
      {
        user_id,
        name,
        url,
      },
      { withCredentials: true, credentials: "include" }
    )
    .then((response) => {
      console.log(response.data);
      return [response.data, response.status];
    })
    .catch((err) => {
      if (err.response) {
        return [err.response.data, err.response.status];
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
      console.log(err.config);
    });
};
const getDomain = async (id) => {
  return await axios
    .get(
      API_URL + `getdomain/${id}`,

      {
        withCredentials: true,
        credentials: "include",
      }
    )
    .then((response) => {
      console.log(response.data);
      console.log(response.data.bankDetail);
      return response.data.urlDetail;
    });
};
const DomainServices = {
  addUrls,
  getDomain,
};

export default DomainServices;
