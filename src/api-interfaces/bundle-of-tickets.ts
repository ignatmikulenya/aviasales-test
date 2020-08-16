import ITicket from "./ticket";

export default interface IBundleOfTickets {
  tickets: ITicket[];
  stop: boolean;
}
