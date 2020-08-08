import React, { useContext } from "react";
import { observer } from "mobx-react";

import { boardStoreContext } from "../../contexts/board-store-context";

import Filter from "../../components/Filter";
import Tabs from "../../components/Tabs";
import Tickets from "../../components/Tickets";

import { TOption } from "../../types/option";

import { TicketType } from "../../enums";

import "./style.css";

const TICKET_TYPE_OPTIONS: TOption[] = [
  { value: TicketType.Сheapest, text: "Самый дешевый" },
  { value: TicketType.Fastest, text: "Самый быстрый" },
];

const FLIGHTS_COUNT_OPTIONS: TOption[] = [
  { value: "all", text: "Все" },
  { value: "0", text: "Без пересадок" },
  { value: "1", text: "1 пересадка" },
  { value: "2", text: "2 пересадки" },
  { value: "3", text: "3 пересадки" },
];

function Board() {
  const store = useContext(boardStoreContext);

  if (!store) {
    return null;
  }

  return (
    <div className="board">
      <div className="board__filter">
        <Filter
          activeOptions={store.flightsCount}
          options={FLIGHTS_COUNT_OPTIONS}
          onChange={({ value }) => store.handleSelectFlightsCount(value)}
        />
      </div>
      <div className="board__result">
        <Tabs
          selectedIndex={TICKET_TYPE_OPTIONS.findIndex(
            (x) => x.value === store.ticketType
          )}
          options={TICKET_TYPE_OPTIONS}
          onClick={({ value }) => store.handleSelectTicketType(value)}
          className="board__tabs"
        />
        <Tickets tickets={store.tickets} />
      </div>
    </div>
  );
}

export default observer(Board);
