import { FC, useState } from "react";

import classes from "./ticket-list.module.scss";
import { OrderSelector } from "../OrderSelector/OrderSelector";
import { TicketCard } from "../TicketCard/TicketCard";
import { Button } from "../../ui/Button/Button";
import { TicketObject } from "../../../api/types/RequestTypes";
import { MoonLoader } from "react-spinners";

export type TicketListProps = {
  tickets: TicketObject[];
};

export const TicketList: FC<TicketListProps> = ({ tickets }) => {
  const [limit, setLimit] = useState(5);

  return (
    <main className={classes["ticket-list"]}>
      <OrderSelector />
      {tickets.slice(0, limit).map((ticket, index) => (
        <TicketCard key={index} ticket={ticket} />
      ))}
      {tickets.length === 0 && <div className={classes["ticket-list__spinner"]}><MoonLoader  color="#2196f3" size={30}/> </div>}
      {tickets.length !== 0 && <Button onClick={() => setLimit(prev => prev + 5)} />}
    </main>
  );
};
