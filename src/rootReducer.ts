import { combineReducers } from "redux";

import { bookingReducer } from "./containers/Booking";

const rootReducer = combineReducers({ booking: bookingReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
