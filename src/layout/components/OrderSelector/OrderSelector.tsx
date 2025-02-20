import { FC, useState } from "react";

import classes from "./order-selector.module.scss";
import { OrderSelectorMode } from "../../../api/types/OrderSelectorMode";
import { useAppDispatch } from "../../../store/hooks";
import { setOrder } from "../../../store/slices/order.slice";


export type OrderSelectorProps = {
  onChange?: (mode: OrderSelectorMode) => void;
};

export const OrderSelector: FC<OrderSelectorProps> = ({ onChange }) => {
  const [current, setCurrent] = useState(OrderSelectorMode.CHEAPEST);
  const dispatch = useAppDispatch();

  const onClick = (mode: OrderSelectorMode) => {
    setCurrent(mode);
    dispatch(setOrder(mode));
    if (onChange) onChange(current);
  };

  return (
    <ul className={classes["order-selector"]}>
      <li
        className={`${classes["order-selector__item"]} ${
          current === OrderSelectorMode.CHEAPEST ? classes["order-selector__item--active"] : ""
        }`}
        onClick={() => onClick(OrderSelectorMode.CHEAPEST)}
      >
        <button>Самый дешевый</button>
      </li>
      <li
        className={`${classes["order-selector__item"]} ${
          current === OrderSelectorMode.FASTEST ? classes["order-selector__item--active"] : ""
        }`}
        onClick={() => onClick(OrderSelectorMode.FASTEST)}
      >
        <button>Самый быстрый</button>
      </li>
      <li
        className={`${classes["order-selector__item"]} ${
          current === OrderSelectorMode.OPTIMAL ? classes["order-selector__item--active"] : ""
        }`}
        onClick={() => onClick(OrderSelectorMode.OPTIMAL)}
      >
        <button>Оптимальный</button>
      </li>
    </ul>
  );
};
