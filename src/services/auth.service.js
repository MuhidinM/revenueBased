import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";
const user = JSON.parse(localStorage.getItem("user"));
const register = (fname, lname, email, phone, password) => {
  return axios
    .post(API_URL + "signup", {
      fname,
      lname,
      email,
      phone,
      password,
    })
    .then((response) => {
      // console.log(response.data.message);
      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const resetPasswordRequest = (email) => {
  console.log(email);
  return axios
    .post(API_URL + "resetpasswordRequest", {
      email,
    })
    .then((response) => {
      return response.data;
    });
};

const resetPassword = (password, token, id) => {
  console.log(password, token, id);
  return axios
    .post(
      API_URL + `resetpassword`,
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
  resetPasswordRequest,
  resetPassword,
  getCurrentUser,
};

export default AuthService;

// class GatewayServices(){
//     register(){

//     }

// }
// export default new GatewayServices()
