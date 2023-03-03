import {
  ADD_AGENT,
  ADD_AGENT_ERROR,
  GET_AGENT,
  GET_AGENT_ERROR,
} from "../types";

const initialState = {
  agents: [],
  addedagent: {},
  loading: true,
};

export default function (state = initialState, action) {
  //   console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case ADD_AGENT:
      //   console.log(action.payload);
      return {
        ...state,
        addedagent: action.payload,
        loading: false,
      };
    case GET_AGENT:
      //   console.log(action.payload);
      return {
        ...state,
        agents: action.payload,
        loading: false,
      };
    case ADD_AGENT_ERROR:
      //   console.log(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_AGENT_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
