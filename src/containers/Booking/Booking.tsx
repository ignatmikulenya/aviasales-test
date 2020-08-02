import React from "react";
import { connect } from "react-redux";

import Filter from "../../components/Filter";
import Tabs from "../../components/Tabs";
import Tickets from "../../components/Tickets";

import { Option } from "../../types/option";

import { selectTicketType, selectFlightsCount } from "./actions";

import ITicket from "../../services/api-interfaces/ticket";
import { TicketType } from "../../enums";

import { RootState } from "../../rootReducer";

import "./style.css";

type StateProps = {
  flightsCount: string[];
  ticketType: TicketType;
  tickets: ITicket[];
};

type DispatchProps = {
  selectFlightsCount: (flightsCount: string) => void;
  selectTicketType: (ticketType: TicketType) => void;
};

type Props = StateProps & DispatchProps;

const TICKET_TYPE_OPTIONS: Option[] = [
  { value: TicketType.Сheapest, text: "Самый дешевый" },
  { value: TicketType.Fastest, text: "Самый быстрый" },
];

const FLIGHTS_COUNT_OPTIONS: Option[] = [
  { value: "all", text: "Все" },
  { value: "0", text: "Без пересадок" },
  { value: "1", text: "1 пересадка" },
  { value: "2", text: "2 пересадки" },
  { value: "3", text: "3 пересадки" },
];

const mapState = (state: RootState): StateProps => ({
  flightsCount: state.booking.flightsCount,
  ticketType: state.booking.ticketType,
  tickets: state.booking.tickets.tickets,
});

const mapDispatch: DispatchProps = {
  selectFlightsCount: selectFlightsCount,
  selectTicketType: selectTicketType,
};

function Booking({
  flightsCount,
  ticketType,
  tickets,
  selectFlightsCount,
  selectTicketType,
}: Props) {
  return (
    <div className="booking">
      <div className="booking__filter">
        <Filter
          activeOptions={flightsCount}
          options={FLIGHTS_COUNT_OPTIONS}
          onChange={({ value }) => selectFlightsCount(value)}
        />
      </div>
      <div className="booking__result">
        <Tabs
          selectedIndex={TICKET_TYPE_OPTIONS.findIndex(
            (x) => x.value === ticketType
          )}
          options={TICKET_TYPE_OPTIONS}
          onClick={({ value }) => selectTicketType(value)}
          className="booking__tabs"
        />
        <Tickets tickets={tickets} />
      </div>
    </div>
  );
}

export default connect(mapState, mapDispatch)(Booking);
