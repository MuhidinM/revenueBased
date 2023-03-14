import axios from "axios";
const agentUrl = "http://localhost:5000/agent/";

const getAllAgents = async (id) => {
  // console.log("calling endpoint");
  console.log("User Id Is: ", id);
  return await axios.get(agentUrl + `get`).then((response) => {
    // console.log("text" + response.data);
    console.log(response.data);
    return response.data.allDevices;
  });
};
const addAgents = async (id) => {
  // console.log("calling endpoint");
  console.log("User Id Is: ", id);
  return await axios.post(agentUrl + `add`, {}).then((response) => {
    // console.log("text" + response.data);
    console.log(response.data);
    return response.data.allDevices;
  });
};

const AgentServices = {
  getAllAgents,
  addAgents,
};

export default AgentServices;
