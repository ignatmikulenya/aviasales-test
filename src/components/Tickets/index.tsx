import React from "react";

import ITicket from "../../api-interfaces/ticket";

import Ticket from "../Ticket";

import "./style.css";

type Props = {
  isSkeleton?: boolean;
  tickets?: ITicket[];
};

export default function Tickets({ isSkeleton, tickets }: Props) {
  return (
    <ul className="tickets">
      {isSkeleton || !tickets
        ? Array.from(Array(5)).map((_, i) => <Ticket key={i} isSkeleton />)
        : tickets.map((ticket, id) => <Ticket key={id} ticket={ticket} />)}
    </ul>
  );
}

Tickets.defaultProps = {
  isSkeleton: false,
};
