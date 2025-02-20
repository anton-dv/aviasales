import { FC } from "react";

import classes from "./ticket-card-item.module.scss";
import { SegmentsObject } from "../../../../api/types/RequestTypes";
import { DateTransform } from "../../../../utils/DateTransform";

export type TicketCardItemProps = {
  segment: SegmentsObject;
};

export const TicketCardItem: FC<TicketCardItemProps> = ({ segment }) => {
  const connects = !segment.stops.length ? "ОК" : segment.stops.length == 1 ? "КА" : "КИ";

  return (
    <ul className={classes["ticket-card-item"]}>
      <li className={classes["ticket-card-item__item"]}>
        <div className={classes["ticket-card-item__label"]}>
          {segment.origin + " - " + segment.destination}
        </div>
        <div className={classes["ticket-card-item__info"]}>{DateTransform.difference(segment.date,  segment.duration)}</div>
      </li>
      <li className={classes["ticket-card-item__item"]}>
        <div className={classes["ticket-card-item__label"]}>В ПУТИ</div>
        <div className={classes["ticket-card-item__info"]}>{DateTransform.duration(segment.duration)}</div>
      </li>
      <li className={classes["ticket-card-item__item"]}>
        <div className={classes["ticket-card-item__label"]}>
          {segment.stops.length + ` ПЕРЕСАД${connects}`}
        </div>
        <div className={classes["ticket-card-item__info"]}>{segment.stops.join(", ")}</div>
      </li>
    </ul>
  );
};
