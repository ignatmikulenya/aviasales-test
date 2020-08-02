import { SELECT_TICKET_TYPE, BookingActions } from "../types";

import { TicketType } from "../../../enums";

export default function ticketTypeReducer(
  prevState: TicketType = TicketType.Сheapest,
  action: BookingActions
): TicketType {
  switch (action.type) {
    case SELECT_TICKET_TYPE:
      return action.payload.ticketType;
    default:
      return prevState;
  }
}
