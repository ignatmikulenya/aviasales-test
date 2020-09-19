import {
  observable,
  action,
  runInAction,
  reaction,
  IReactionDisposer,
} from "mobx";

import ITicket from "../api-interfaces/ticket";

import TicketsService from "../services/tickets-service";

import { SELECT_ALL_VALUE, DEFAULT_FILTER_VALUES } from "../constants";
import { TicketType } from "../enums";

export default class BoardStore {
  private ticketsService: TicketsService;

  @observable stopsCount: string[];
  @observable ticketType: TicketType;
  @observable tickets: ITicket[];
  @observable filteredTickets: ITicket[];

  @observable isLoading: boolean;

  private ticketTypeDisposer: IReactionDisposer;
  private stopsCountDisposer: IReactionDisposer;

  constructor() {
    this.ticketsService = new TicketsService();

    this.resetData();
  }

  @action setIsLoading = (value: boolean): void => {
    this.isLoading = value;
  };

  @action setTickets = (value: ITicket[]): void => {
    this.tickets = value;
  };

  @action setFilteredTickets = (value: ITicket[]): void => {
    this.filteredTickets = value;
  };

  @action handleSelectStopsCount = (value: string): void => {
    const isSelected = this.stopsCount.includes(value);
    if (isSelected) {
      if (value === SELECT_ALL_VALUE) {
        this.stopsCount = [];
      } else {
        this.stopsCount = this.stopsCount.filter(
          (x) => x !== value && x !== SELECT_ALL_VALUE
        );
      }
    } else {
      if (
        value === SELECT_ALL_VALUE ||
        this.stopsCount.length + 1 === DEFAULT_FILTER_VALUES.length - 1
      ) {
        this.stopsCount = DEFAULT_FILTER_VALUES;
      } else {
        this.stopsCount = this.stopsCount.concat(value);
      }
    }
  };

  @action handleSelectTicketType = (value: TicketType): void => {
    this.ticketType = value;
  };

  fetchTickets = async (): Promise<void> => {
    try {
      this.setIsLoading(true);

      const tickets: ITicket[] = [];
      const searchId = await this.ticketsService.getSearchId();
      if (searchId.response) {
        let fetching = true;
        do {
          const bundleOfTickets = await this.ticketsService.getBundleOfTickets(
            searchId.response.searchId
          );

          if (bundleOfTickets.status !== "error" && bundleOfTickets.response) {
            fetching = !bundleOfTickets.response.stop;
            tickets.push(...bundleOfTickets.response.tickets);
          }
        } while (fetching);
      }

      runInAction(() => {
        this.tickets = tickets;
        this.isLoading = false;
      });
    } catch {
      runInAction(() => {
        this.tickets = [];
        this.isLoading = false;
      });
    }
  };

  getFilteredTickets = (): ITicket[] => {
    let filteredByStopsCount = this.stopsCount.includes(SELECT_ALL_VALUE)
      ? this.tickets.slice()
      : this.tickets.filter((ticket) =>
          ticket.segments.every((segment) =>
            this.stopsCount.includes(segment.stops.length.toString())
          )
        );

    if (this.ticketType === TicketType.Сheapest) {
      return filteredByStopsCount.sort((a, b) => a.price - b.price).slice(0, 5);
    } else {
      return filteredByStopsCount
        .sort(
          (a, b) =>
            a.segments.reduce((acc, segment) => {
              return (acc += segment.duration);
            }, 0) -
            b.segments.reduce((acc, segment) => {
              return (acc += segment.duration);
            }, 0)
        )
        .slice(0, 5);
    }
  };

  refreshData = (): void => {
    this.fetchTickets().then(() =>
      this.setFilteredTickets(this.getFilteredTickets())
    );
  };

  resetData = () => {
    this.stopsCount = DEFAULT_FILTER_VALUES;
    this.ticketType = TicketType.Сheapest;
    this.tickets = [];
    this.filteredTickets = [];
    this.isLoading = false;
  };

  init = (): void => {
    this.resetData();

    this.ticketTypeDisposer = reaction(
      () => this.ticketType,
      () => this.refreshData()
    );
    this.stopsCountDisposer = reaction(
      () => this.stopsCount.length,
      () => this.refreshData()
    );

    this.refreshData();
  };

  dispose = (): void => {
    this.ticketTypeDisposer();
    this.stopsCountDisposer();
  };
}
