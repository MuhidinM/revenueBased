import axios from "axios";
import jwt from "jwt-decode";
import { LOGIN_NODE_API, NODE_API } from "../utils/API";
import jwtDecode from "jwt-decode";
// import { useSelector } from "react-redux";
import {
  setRole,
  setToken,
  setUserID,
  setUsername,
} from "../store/actions/userProfileAction";
// const user = JSON.parse(localStorage.getItem("user"));
const register = async (username, password) => {
  const response = await LOGIN_NODE_API.post("/merchant/register", {
    username,
    password,
  });
  // console.log(response.data.message);
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (
  username,
  password,
  setMessage,
  setLoading,
  navigate,
  dispatch
) => {
  try {
    await LOGIN_NODE_API.post(
      "/merchant/login",
      {
        username,
        password,
      }
      // { withCredentials: true }
    ).then((res) => {
      console.log("res", res);
      if (res.data.token) {
        dispatch(setToken(res?.data?.token));
        const decoded = jwtDecode(res.data.token);
        console.log("this if from decoded", decoded);
        const user = jwt(res.data.token);
        if (decoded?.role === "sales") {
          dispatch(setUsername(decoded?.email_address));
          dispatch(setUserID(decoded?.sales_id));
          dispatch(setRole(decoded?.role));
          setLoading(false);
          navigate("/admin");
          window.location.reload();
        } else if (decoded?.role === "merchant") {
          dispatch(setUsername(decoded?.email_address));
          dispatch(setUserID(decoded?.merchant_id));
          dispatch(setRole(decoded?.role));
          setLoading(false);
          navigate("/users");
          // window.location.reload();
        }
        // document.cookie = "token=" + response.data.token;
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      }
    });
  } catch (error) {
    try {
      console.log(error?.response?.data?.message);
      setMessage(error?.response?.data?.message);
      error?.response?.data?.message === "In active Account"
        ? setMessage(error?.response?.data?.message)
        : await LOGIN_NODE_API.post("/sales/login", {
            username,
            password,
          }).then((res) => {
            console.log("res", res);
            if (res.data.token) {
              dispatch(setToken(res?.data?.token));
              const decoded = jwtDecode(res.data.token);
              console.log("this if from decoded", decoded);
              const user = jwt(res.data.token);
              if (decoded?.role === "sales") {
                // dispatch(setUsername(decoded?.email_address));
                dispatch(setUserID(decoded?.sales_id));
                dispatch(setRole(decoded?.role));
                setLoading(false);
                navigate("/sales");
                window.location.reload();
              } else if (decoded?.role === "merchant") {
                dispatch(setUsername(decoded?.email_address));
                dispatch(setUserID(decoded?.merchant_id));
                dispatch(setRole(decoded?.role));
                setLoading(false);
                navigate("/users");
                // window.location.reload();
              }
              // document.cookie = "token=" + response.data.token;
              localStorage.setItem("user", JSON.stringify(user));
              return user;
            }
          });
    } catch (error) {
      console.log(error);
      console.log(error?.response?.data?.message);
      setLoading(false);
      setMessage(error?.response?.data?.message);
    }
  }
};

const getLoggedInUser = async (token) => {
  const response = await axios.post(
    process.env.REACT_APP_API_NODE_URLS + "api/user/verifyToken",
    {},
    { headers: { "Content-Type": "application/json" }, "Bearer Token": token }
    // { withCredentials: true }
  );
  console.log(response);
  return response.data.user;
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

const resetPasswordRequest = async (email) => {
  console.log(email);
  const response = await axios.post(
    process.env.REACT_APP_API_NODE_URLS + "api/auth/resetpasswordRequest",
    {
      email,
    }
  );
  return response.data;
};

const generateApiKey = async (merchant_id, expiryDate) => {
  console.log(merchant_id, expiryDate);
  try {
    const response = await NODE_API.post("/apiKey/generate", {
      merchant_id,
      expiryDate,
    });
    console.log("Reponse", response.data);
    return [response.data, response.status];
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log("Error", err.message);
    }
    console.log(err.config);
  }
};

const getGeneratedApiKey = async (merchant_id) => {
  console.log(merchant_id);
  const response = await NODE_API.get(`apiKey/get?id=${merchant_id}`);
  return response.data;
};

const resetPassword = async (password, token, id) => {
  console.log(password, token, id);
  const response = await axios.post(
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
  );
  return response.data;
};

// const checkToken = () => {
//   return localStorage.getItem(user.token);
// };

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
