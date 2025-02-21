import { FC, useState } from "react";

import classes from "./ticket-list.module.scss";
import { OrderSelector } from "../OrderSelector/OrderSelector";
import { TicketCard } from "../TicketCard/TicketCard";
import { Button } from "../../ui/Button/Button";
import { TicketObject } from "../../../api/types/RequestTypes";
import { MoonLoader } from "react-spinners";
import { useAppSelector } from "../../../store/hooks";
import { LoadingStatus } from "../../../store/slices/loading.slice";

export type TicketListProps = {
  tickets: TicketObject[];
};

export const TicketList: FC<TicketListProps> = ({ tickets }) => {
  const [limit, setLimit] = useState(5);
  const loading = useAppSelector(state => state.loading.status);

  return (
    <main className={classes["ticket-list"]}>
      <OrderSelector />
      {tickets.slice(0, limit).map((ticket, index) => (
        <TicketCard key={index} ticket={ticket} />
      ))}
      {loading === LoadingStatus.No && (
        <div className={classes["ticket-list__spinner"]}>
          <MoonLoader color="#2196f3" size={30} />
        </div>
      )}
      {tickets.length === 0 && <div className={classes["ticket-list__empty"]}>Empty</div>}
      {tickets.length !== 0 && <Button onClick={() => setLimit(prev => prev + 5)} />}
    </main>
  );
};
