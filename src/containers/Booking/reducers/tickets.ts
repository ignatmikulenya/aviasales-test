import {
  FETCH_TICKETS_STARTED,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  ITicketsState,
  BookingActions,
} from "../types";

const initialState: ITicketsState = {
  loading: false,
  tickets: [],
  error: null,
};

export default function bookingReducer(
  prevState: ITicketsState = initialState,
  action: BookingActions
): ITicketsState {
  switch (action.type) {
    case FETCH_TICKETS_STARTED:
      return {
        ...prevState,
        loading: true,
      };
    case FETCH_TICKETS_SUCCESS:
      return {
        ...prevState,
        loading: false,
        tickets: action.payload.tickets,
      };
    case FETCH_TICKETS_FAILURE:
      return {
        ...prevState,
        loading: false,
        error: action.payload,
      };
    default:
      return prevState;
  }
}
