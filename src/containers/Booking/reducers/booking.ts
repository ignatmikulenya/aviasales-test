import { combineReducers } from "redux";

import flightsCountReducer from "./flightsCount";
import ticketTypeReducer from "./ticketType";
import ticketsReducer from "./tickets";

export default combineReducers({
  flightsCount: flightsCountReducer,
  ticketType: ticketTypeReducer,
  tickets: ticketsReducer,
});
