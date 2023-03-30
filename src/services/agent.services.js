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
  console.log(firstname, lastname, email, password)
  return await axios.post(agentUrl + `register`, {
    firstname,lastname,email,password

  }).then((response) => {    
    console.log(response.data);
    return response.data;
  }).catch((err)=>{
    console.log("Error", err)
  });
};

const AgentServices = {
  getAllAgents,
  addAgents,
};

export default AgentServices;
