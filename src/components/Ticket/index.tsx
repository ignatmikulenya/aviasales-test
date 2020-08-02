import React from "react";

import ITicket from "../../services/api-interfaces/ticket";

import Segment from "../Segment";
import Logo from "../../assets/s7-logo.png";

import "./style.css";

type Props = {
  ticket: ITicket;
};

export default function Ticket({ ticket }: Props) {
  return (
    <li className="ticket">
      <div className="ticket__header">
        <p className="ticket__price">{ticket.price}</p>
        <img src={Logo} alt="Логотип" className="ticket__logo" />
      </div>
      {ticket.segments.map((segment, id) => (
        <Segment key={id} segment={segment} />
      ))}
    </li>
  );
}
