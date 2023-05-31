import { useSelector } from "react-redux";

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    // for Node.js Express back-end
    console.log(user.token);
    // { Authorization: 'Bearer ' + user.accessToken }
    return { "Bearer Token": "token" };
  } else {
    return {};
  }
}
