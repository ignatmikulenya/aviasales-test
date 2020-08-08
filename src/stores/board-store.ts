import ITicket from "../api-interfaces/ticket";

import { TicketType } from "../enums";

export default function createBoardStore() {
  return {
    flightsCount: [] as string[],
    ticketType: TicketType.Сheapest,
    tickets: [] as ITicket[],

    handleSelectFlightsCount(value: string): void {
      const isSelected = this.flightsCount.includes(value);
      if (isSelected) {
        this.flightsCount = this.flightsCount.filter((x) => x !== value);
      } else {
        this.flightsCount = [...this.flightsCount, value];
      }
    },

    handleSelectTicketType(value: TicketType): void {
      this.ticketType = value;
    },
  };
}

export type TBoardStore = ReturnType<typeof createBoardStore>;
