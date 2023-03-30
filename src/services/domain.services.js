import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_NODE_URLS

const addUrls = async (user_id, name, url) => {
  return await axios
    .post(
      API_URL + "api/createurl",
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
      API_URL + `api/getdomain/${id}`,

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
