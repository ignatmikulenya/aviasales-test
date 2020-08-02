import ITicket from "../../services/api-interfaces/ticket";
import { TicketType } from "../../enums";

export const SELECT_TICKET_TYPE = "SELECT_TICKET_TYPE";
export const FETCH_TICKETS_STARTED = "FETCH_TICKETS_STARTED";
export const FETCH_TICKETS_SUCCESS = "FETCH_TICKETS_SUCCESS";
export const FETCH_TICKETS_FAILURE = "FETCH_TICKETS_FAILURE";
export const SELECT_FLIGHTS_COUNT = "SELECT_FLIGHTS_COUNT";

export interface ITicketsState {
  loading: boolean;
  tickets: ITicket[];
  error: Error | null;
}

export interface IBookingState {
  flightsCount: string[];
  ticketType: TicketType;
  tickets: ITicketsState;
}

interface ISelectTicketTypeAction {
  type: typeof SELECT_TICKET_TYPE;
  payload: {
    ticketType: TicketType;
  };
}

interface IFetchTicketsStartedTypeAction {
  type: typeof FETCH_TICKETS_STARTED;
}

interface IFetchTicketsSuccessTypeAction {
  type: typeof FETCH_TICKETS_SUCCESS;
  payload: {
    tickets: ITicket[];
  };
}

interface IFetchTicketsFailureTypeAction {
  type: typeof FETCH_TICKETS_FAILURE;
  payload: Error;
  error?: boolean;
}

interface ISelectFlightsCountAction {
  type: typeof SELECT_FLIGHTS_COUNT;
  payload: {
    flightsCount: string;
  };
}

export type BookingActions =
  | ISelectTicketTypeAction
  | IFetchTicketsStartedTypeAction
  | IFetchTicketsSuccessTypeAction
  | IFetchTicketsFailureTypeAction
  | ISelectFlightsCountAction;
