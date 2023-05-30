import axios from "axios";
import jwt from "jwt-decode";
import { NODE_API } from "../utils/API";
const user = JSON.parse(localStorage.getItem("user"));
const register = async (username, password) => {
  const response = await NODE_API.post("/merchant/signup", {
    username,
    password,
  });
  // console.log(response.data.message);
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = (email, password) => {
  return axios
    .post(
      process.env.REACT_APP_API_NODE_URLS + "api/user/signin",
      {
        email,
        password,
      },
      { withCredentials: true, credentials: "include" }

      // { withCredentials: true }
    )
    .then((response) => {
      console.log(response);
      if (response.data.token) {
        console.log(response.data);
        const user = jwt(response.data.token);
        // document.cookie = "token=" + response.data.token;
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      }

      // return response.data;
    });
};

const getLoggedInUser = () => {
  return axios
    .post(
      process.env.REACT_APP_API_NODE_URLS + "api/user/verifyToken",
      {},
      { withCredentials: true, credentials: "include" }

      // { withCredentials: true }
    )
    .then((response) => {
      console.log(response);
      return response.data.user;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

// const logout = () => {
//   return axios
//     .post(
//       API_URL + "signout"

//       // { withCredentials: true }
//     )
//     .then((response) => {
//       console.log(response);
//       return response.data;
//     });
// };

const resetPasswordRequest = (email) => {
  console.log(email);
  return axios
    .post(
      process.env.REACT_APP_API_NODE_URLS + "api/auth/resetpasswordRequest",
      {
        email,
      }
    )
    .then((response) => {
      return response.data;
    });
};

const generateApiKey = (email, expiryDate) => {
  console.log(email, expiryDate);
  return axios
    .post(process.env.REACT_APP_API_NODE_URLS + "api/user/generateApiKey", {
      email,
      expiryDate,
    })
    .then((response) => {
      console.log("Reponse", response.data);
      return [response.data, response.status];
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
      console.log(err.config);
    });
};

const getGeneratedApiKey = (id) => {
  console.log(id);
  return axios
    .get(process.env.REACT_APP_API_NODE_URLS + `api/user/gateApiKey/${id}`)
    .then((response) => {
      // console.log(response.data);
      return response.data;
      // console.log(response.data);
    });
};

const resetPassword = (password, token, id) => {
  console.log(password, token, id);
  return axios
    .post(
      process.env.REACT_APP_API_NODE_URLS + `api/auth/resetpassword`,
      {
        password,
      },
      {
        params: {
          token,
          id,
        },
      }
    )
    .then((response) => {
      return response.data;
    });
};

const checkToken = () => {
  return localStorage.getItem(user.token);
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getLoggedInUser,
  resetPasswordRequest,
  resetPassword,
  getCurrentUser,
  generateApiKey,
  getGeneratedApiKey,
};

export default AuthService;

// class GatewayServices(){
//     register(){

//     }

// }
// export default new GatewayServices()
