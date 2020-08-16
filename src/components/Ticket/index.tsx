import React from "react";

import ITicket from "../../api-interfaces/ticket";

import Segment from "../Segment";
import Skeleton from "../Skeleton";

import "./style.css";

type Props = {
  isSkeleton?: boolean;
  ticket?: ITicket;
};

export default function Ticket({ isSkeleton, ticket }: Props) {
  if (isSkeleton || !ticket) {
    return (
      <li className="ticket">
        <div className="ticket__header">
          <p className="ticket__price">
            <Skeleton height="24px" />
          </p>
          <Skeleton height="36px" className="ticket__logo" />
        </div>
        {Array.from(Array(2)).map((_, i) => (
          <Segment key={i} isSkeleton />
        ))}
      </li>
    );
  }

  return (
    <li className="ticket">
      <div className="ticket__header">
        <p className="ticket__price">{ticket.price} р</p>
        <img
          src={`http://pics.avs.io/99/36/${ticket.carrier}.png`}
          alt="Логотип"
          className="ticket__logo"
        />
      </div>
      {ticket.segments.map((segment, id) => (
        <Segment key={id} segment={segment} />
      ))}
    </li>
  );
}

Ticket.defaultProps = {
  isSkeleton: false,
};
