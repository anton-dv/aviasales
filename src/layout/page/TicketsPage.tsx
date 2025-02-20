import { FC, useState } from "react";

import classes from "./tickets-page.module.scss";
import { TicketList } from "../components/TicketList/TicketList";
import { Logo } from "../components/Logo/Logo";
import { TicketFilter } from "../components/TicketFilter/TicketFilter";
import { TicketObject } from "../../api/types/RequestTypes";
import { useTickets } from "../../hooks/useTickets";


export const TicketsPage: FC = () => {
  const [tickets, setTickets] = useState<TicketObject[]>([]);
  useTickets(setTickets);

  return (
    <div className={classes["tickets-page"]}>
      <Logo />
      <div className={classes["tickets-page__content"]}>
        <TicketFilter />
        <TicketList tickets={tickets} />
      </div>
    </div>
  );
};
