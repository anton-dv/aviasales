import { FC } from "react";

import classes from "./ticket-card.module.scss";
import { TicketCardHeader } from "./TicketCardHeader/TicketCardHeader";
import { TicketCardItem } from "./TicketCardItem/TicketCardItem";
import { TicketObject } from "../../../api/types/RequestTypes";

export type TicketCardProps = {
  ticket: TicketObject;
};

export const TicketCard: FC<TicketCardProps> = ({ ticket }) => {
  return (
    <div className={classes["ticket-card"]}>
      <TicketCardHeader
        price={ticket.price}
        carrier={ticket.carrier}
      />
      <TicketCardItem segment={ticket.segments[0]} />
      <TicketCardItem segment={ticket.segments[1]} />
    </div>
  );
};
