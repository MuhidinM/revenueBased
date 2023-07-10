import {
  ADD_AGENT,
  ADD_AGENT_ERROR,
  GET_AGENT,
  GET_AGENT_ERROR,
  CREATE_NEDAJ_ENTRIES,
  CREATE_NEDAJ_ENTRIES_ERROR,
  GET_NEDAJ_PRICES,
  GET_NEDAJ_PRICES_ERROR,
  CREATE_NEDAJ_PRICES,
  CREATE_NEDAJ_PRICES_ERROR,
  GET_TOTAL_AMOUNT,
  GET_TOTAL_AMOUNT_ERROR,
  GET_DAILY_TOTAL_AMOUNT,
  GET_DAILY_TOTAL_AMOUNT_ERROR,
  CREATE_NEDAJ_STATION,
  CREATE_NEDAJ_STATION_ERROR,
  GET_NEDAJ_STATION,
  GET_NEDAJ_STATION_ERROR,
  CREATE_MANAGER,
  CREATE_MANAGER_ERROR,
  GET_MANAGER,
  GET_MANAGER_ERROR,
} from "../types";

const initialState = {
  agents: [],
  addedagent: {},
  entry: {},
  latestPrices: {},
  prices: [],
  loading: true,
  error: {},
  totalAmount: "-",
  dailyTotalAmount: "-",
  nedaj_station: {},
  nedaj_stations: [],
  manager: {},
  managers: [],
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
    case GET_MANAGER:
      //   console.log(action.payload);
      return {
        ...state,
        managers: action.payload,
        loading: false,
      };
    case CREATE_NEDAJ_ENTRIES:
      //   console.log(action.payload);
      return {
        ...state,
        entry: action.payload,
        loading: false,
      };
    case CREATE_NEDAJ_PRICES:
      //   console.log(action.payload);
      return {
        ...state,
        latestPrices: action.payload,
        loading: false,
      };
    case CREATE_NEDAJ_STATION:
      //   console.log(action.payload);
      return {
        ...state,
        nedaj_station: action.payload,
        loading: false,
      };
    case CREATE_NEDAJ_STATION_ERROR:
      //   console.log(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CREATE_NEDAJ_PRICES_ERROR:
      //   console.log(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CREATE_MANAGER:
      return {
        ...state,
        manager: action.payload,
        loading: false,
      };
    case CREATE_MANAGER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_NEDAJ_PRICES:
      //   console.log(action.payload);
      return {
        ...state,
        prices: action.payload,
        loading: false,
      };
    case GET_NEDAJ_STATION:
      //   console.log(action.payload);
      return {
        ...state,
        nedaj_stations: action.payload,
        loading: false,
      };
    case GET_NEDAJ_STATION_ERROR:
      //   console.log(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_TOTAL_AMOUNT:
      //   console.log(action.payload);
      return {
        ...state,
        totalAmount: action.payload,
        loading: false,
      };
    case GET_DAILY_TOTAL_AMOUNT:
      //   console.log(action.payload);
      return {
        ...state,
        dailyTotalAmount: action.payload,
        loading: false,
      };
    case GET_NEDAJ_PRICES_ERROR:
      //   console.log(action.payload);
      return {
        ...state,
        error: action.payload,
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
