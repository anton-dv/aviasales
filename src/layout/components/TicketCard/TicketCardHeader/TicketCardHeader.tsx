import { FC } from "react";

import classes from "./ticket-card-header.module.scss";

export type TicketCardHeaderProps = {
  price: number;
  carrier: string;
};

export const TicketCardHeader: FC<TicketCardHeaderProps> = ({ price, carrier }) => {
  const priceFormat = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " Р";

  return (
    <div className={classes["ticket-card-header"]}>
      <div className={classes["ticket-card-header__price"]}>{priceFormat}</div>
      <img className={classes["ticket-card-header__logo"]} src={carrier} alt="airlines logo" />
    </div>
  );
};
