export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    // for Node.js Express back-end
    console.log(user.token);
    // { Authorization: 'Bearer ' + user.accessToken }
    return { "x-access-token": user.token };
  } else {
    return {};
  }
}
