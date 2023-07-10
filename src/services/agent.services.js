import axios from "axios";
const agentUrl = process.env.REACT_APP_API_SPRING_URLS;

const getAllAgents = async (id) => {
  // console.log("calling endpoint");
  console.log("User Id Is: ", id);
  return await axios.get(agentUrl + `get`).then((response) => {
    // console.log("text" + response.data);
    console.log(response.data);
    return response.data.allDevices;
  });
};
const addAgents = async (firstname, lastname, email, password) => {
  // console.log("calling endpoint");
  console.log(firstname, lastname, email, password);
  return await axios
    .post(agentUrl + `register`, {
      firstname,
      lastname,
      email,
      password,
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

const addManager = async (
  fname,
  lname,
  email_address,
  phone,
  manager_id,
  user_id
) => {
  // console.log("calling endpoint");
  let phone_number = "0" + phone;
  console.log("phone Number Is", phone_number);
  return await axios
    .post(
      agentUrl + `api/manager/register`,
      {
        fname,
        lname,
        email_address,
        phone_number,
        manager_id,
        user_id,
      }
      // { withCredentials: true, credentials: "include" }
    )
    .then((response) => {
      const manager = jwt(response.data.token);
      // console.log("Decoded Agents Are", agent.agent.email_address)
      const password = response.data.defaultPassword;
      return [
        { phone_number: manager.manager.phone_number, password: password },
        response.status,
      ];
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

const getAllManager = async (id) => {
  return await axios
    .get(agentUrl + `api/user/${id}/manager`)
    .then((response) => {
      return response.data;
    });
};

const createNedajEntries = async (nedaj_type, amount_in_litre, prices, id) => {
  // console.log("calling endpoint");
  // console.log(fname, lname, email_address, phone_number)
  return await axios
    .post(
      agentUrl + `api/agent/create`,
      {
        nedaj_type,
        amount_in_litre,
        prices,
        id,
      },
      { withCredentials: true, credentials: "include" }
    )
    .then((response) => {
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
const createNedajPrices = async (nedaj_type, prices, id) => {
  // console.log("calling endpoint");
  // console.log(fname, lname, email_address, phone_number)
  return await axios
    .post(
      agentUrl + `api/user/${id}/configration`,
      {
        nedaj_type,
        prices,
        id,
      },
      { withCredentials: true, credentials: "include" }
    )
    .then((response) => {
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
const getNedajPrices = async (id) => {
  console.log("id is:", id);
  return await axios
    .get(agentUrl + `api/user/${id}/configration`, {
      withCredentials: true,
      credentials: "include",
    })
    .then((response) => {
      return response.data.entries;
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

const login = (phone_number, password) => {
  return axios
    .post(
      process.env.REACT_APP_API_NODE_URLS + "api/agent/login",
      {
        phone_number,
        password,
      },
      { withCredentials: true, credentials: "include" }
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

const getTotalAmount = async (id) => {
  return await axios
    .get(agentSpringUrl + `totalAmountByMerchantId/${id}`)
    .then((response) => {
      return response.data.TotalAmountByMerchantIdResponse;
    })
    .catch((err) => {
      if (err.response) {
        return [err.response.data, err.response.status];
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    });
};
const getDailyTotalAmount = async (id) => {
  return await axios
    .get(agentSpringUrl + `currentTotalAmountByMerchantId/${id}`)
    .then((response) => {
      return response.data.CurrentTotalAmountResponse;
    })
    .catch((err) => {
      if (err.response) {
        return [err.response.data, err.response.status];
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    });
};

const createNedajStation = async (
  station_name,
  location,
  manager_id,
  user_id
) => {
  // console.log("calling endpoint");
  // console.log(fname, lname, email_address, phone_number)
  return await axios
    .post(agentUrl + `api/user/station/create`, {
      station_name,
      location,
      manager_id,
      user_id,
    })
    .then((response) => {
      console.log("Nedaj Station Response", response.data);
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
const getNedajStation = async (id, role) => {
  // console.log("calling endpoint");
  // console.log(fname, lname, email_address, phone_number)
  console.log("Station By Id", id, role);
  return await axios
    .get(agentUrl + `api/user/${id}/station`, { params: { role: role } })
    .then((response) => {
      console.log("Nedaj Station", response.data);
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

const AgentServices = {
  getAllAgents,
  addAgents,
  login,
  createNedajEntries,
  createNedajPrices,
  getNedajPrices,
  getTotalAmount,
  getDailyTotalAmount,
  createNedajStation,
  getNedajStation,
  addManager,
  getAllManager,
};

export default AgentServices;
