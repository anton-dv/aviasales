import { FC, useEffect, useState } from "react";

import classes from "./ticket-filter.module.scss";
import { Checkbox } from "../../ui/Checkbox/Checkbox";
import { useAppDispatch } from "../../../store/hooks";
import { setFilter } from "../../../store/slices/filter.slice";

export type TicketFilterState = {
  all: boolean;
  zero: boolean;
  one: boolean;
  two: boolean;
  three: boolean;
};

export const TicketFilter: FC = () => {
  const [filterState, setFilterState] = useState<TicketFilterState>({
    all: true,
    zero: true,
    one: true,
    two: true,
    three: true,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    setFilterState(prev => ({
      ...prev,
      all: filterState.zero && filterState.one && filterState.two && filterState.three,
    }));
    dispatch(setFilter(filterState));
  }, [filterState.zero, filterState.one, filterState.two, filterState.three]);

  const onChangeAll = (checked: boolean) => {
    setFilterState({
      all: checked,
      zero: checked,
      one: checked,
      two: checked,
      three: checked,
    });
  };

  return (
    <aside className={classes["ticket-filter"]}>
      <h2 className={classes["ticket-filter__title"]}>Количество пересадок</h2>
      <ul className={classes["ticket-filter__list"]}>
        <li>
          <Checkbox checked={filterState.all} onChange={onChangeAll} label="Все" />
        </li>
        <li>
          <Checkbox
            checked={filterState.zero}
            onChange={checked => setFilterState(prev => ({ ...prev, zero: checked }))}
            label="Без пересадок"
          />
        </li>
        <li>
          <Checkbox
            checked={filterState.one}
            onChange={checked => setFilterState(prev => ({ ...prev, one: checked }))}
            label="1 пересадка"
          />
        </li>
        <li>
          <Checkbox
            checked={filterState.two}
            onChange={checked => setFilterState(prev => ({ ...prev, two: checked }))}
            label="2 пересадка"
          />
        </li>
        <li>
          <Checkbox
            checked={filterState.three}
            onChange={checked => setFilterState(prev => ({ ...prev, three: checked }))}
            label="3 пересадка"
          />
        </li>
      </ul>
    </aside>
  );
};
