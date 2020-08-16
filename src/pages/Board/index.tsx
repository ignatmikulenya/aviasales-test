import React, { useEffect } from "react";
import { useObserver } from "mobx-react";

import { useBoardStore } from "../../providers/board-store-provider";

import Filter from "../../components/Filter";
import Tabs from "../../components/Tabs";
import Tickets from "../../components/Tickets";

import { STOPS_COUNT_OPTIONS, TICKET_TYPE_OPTIONS } from "../../constants";
import { TicketType } from "../../enums";

import "./style.css";

function Board() {
  const store = useBoardStore();

  useEffect(() => {
    store.refreshData();
  }, [store.ticketType, store.stopsCount.length]);

  return useObserver(() => {
    return (
      <div className="board">
        <div className="board__filter">
          <Filter
            value={store.stopsCount}
            options={STOPS_COUNT_OPTIONS}
            onChange={({ value }) => store.handleSelectStopsCount(value)}
          />
        </div>
        <div className="board__result">
          <Tabs<TicketType>
            value={store.ticketType}
            options={TICKET_TYPE_OPTIONS}
            onClick={({ value }) => store.handleSelectTicketType(value)}
            className="board__tabs"
          />
          <Tickets
            isSkeleton={store.isLoading}
            tickets={store.filteredTickets}
          />
        </div>
      </div>
    );
  });
}

export default Board;
