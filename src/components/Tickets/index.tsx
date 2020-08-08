import React from "react";

import ITicket from "../../api-interfaces/ticket";

import Ticket from "../Ticket";

import "./style.css";

type Props = {
  tickets: ITicket[];
};

export default function Tickets({ tickets }: Props) {
  return (
    <ul className="tickets">
      {tickets.map((ticket, id) => (
        <Ticket key={id} ticket={ticket} />
      ))}
    </ul>
  );
}
