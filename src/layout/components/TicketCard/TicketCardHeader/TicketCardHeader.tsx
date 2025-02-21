import { FC, useEffect, useState } from "react";

import classes from "./ticket-card-header.module.scss";
import { MoonLoader } from "react-spinners";

export type TicketCardHeaderProps = {
  price: number;
  carrier: string;
};

export const TicketCardHeader: FC<TicketCardHeaderProps> = ({ price, carrier }) => {
  const priceFormat = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " Р";
  const [load, setLoad] = useState(false);

  useEffect(() => setLoad(false), [carrier]);

  return (
    <div className={classes["ticket-card-header"]}>
      <div className={classes["ticket-card-header__price"]}>{priceFormat}</div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div style={{ position: "absolute", visibility: !load ? "visible" : "hidden"}}>
          <MoonLoader color="#2196f3" size={15} />
        </div>
        <img
          className={classes["ticket-card-header__logo"]}
          style={{ visibility: load ? "visible" : "hidden"}}
          onLoad={() => setLoad(true)}
          src={`https://pics.avs.io/110/36/${carrier}.png`}
          alt="airlines logo"
        />
      </div>
    </div>
  );
};
