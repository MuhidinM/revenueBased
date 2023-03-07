import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://10.1.177.130:5000/image/";

const getImage = async (API_URL) => {
  console.log(API_URL);
  return await axios.get(API_URL).then((response) => response.data);
};

const ImageServices = {
  getImage,
};

export default ImageServices;
