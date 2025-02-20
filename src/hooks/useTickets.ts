import { useAppSelector } from "../store/hooks"
import { Aviasales } from "../api/Aviasales";
import { FilterObject } from "../store/slices/filter.slice";
import { OrderSelectorMode } from "../api/types/OrderSelectorMode";
import { useState } from "react";
import { TicketObject } from "../api/types/RequestTypes";
import { LoadingStatus } from "../store/slices/loading.slice";

type CurrentOptions = {
  filter: FilterObject | null,
  order: OrderSelectorMode | null,
  loading: LoadingStatus | null
}

export const useTickets = async (func: (tickets: TicketObject[]) => void) => {
  const [current, setCurrent] = useState<CurrentOptions>({ filter: null, order: null, loading: null })

  const filter = useAppSelector(state => state.filter.current);
  const order = useAppSelector(state => state.order.current);
  const loading = useAppSelector(state => state.loading.status);

  if (current.order === order &&
    loading === current.loading &&
    JSON.stringify(current.filter) === JSON.stringify(filter)) return;

  setCurrent({ filter, order, loading })

  func(await Aviasales.formatTickets(order, filter));
}

