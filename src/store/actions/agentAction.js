import {
  ADD_AGENT,
  ADD_AGENT_ERROR,
  GET_AGENT,
  GET_AGENT_ERROR,
} from "../types";
// import AuthService from "../../services/auth.service";

import AgentServices from "../../services/agent.services";
export const addAgent = () => async (dispatch) => {
  try {
    // const user = AuthService.getCurrentUser();
    console.log("running");
    const addedAgent = await AgentServices.addAgents();

    dispatch({
      type: ADD_AGENT,
      payload: addedAgent,
    });
  } catch (error) {
    dispatch({
      type: ADD_AGENT_ERROR,
      payload: error,
    });
  }
};

export const getAgent = () => async (dispatch) => {
  try {
    // const user = AuthService.getCurrentUser();
    console.log("running");
    const agents = await AgentServices.getAllAgents();
    console.log(agents);
    dispatch({
      type: GET_AGENT,
      payload: agents,
    });
  } catch (error) {
    dispatch({
      type: GET_AGENT_ERROR,
      payload: error,
    });
  }
};
