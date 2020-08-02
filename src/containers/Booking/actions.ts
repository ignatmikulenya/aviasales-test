import {
  SELECT_TICKET_TYPE,
  SELECT_FLIGHTS_COUNT,
  BookingActions,
} from "./types";

import { TicketType } from "../../enums";

const selectTicketType = (ticketType: TicketType): BookingActions => ({
  type: SELECT_TICKET_TYPE,
  payload: {
    ticketType,
  },
});

const selectFlightsCount = (flightsCount: string): BookingActions => ({
  type: SELECT_FLIGHTS_COUNT,
  payload: {
    flightsCount,
  },
});

export { selectTicketType, selectFlightsCount };
