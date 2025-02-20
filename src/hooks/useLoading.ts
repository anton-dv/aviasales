import { Aviasales } from "../api/Aviasales";
import { Carriers } from "../api/Carriers";
import { TicketObject } from "../api/types/RequestTypes";
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { LoadingStatus, setStatus } from "../store/slices/loading.slice";

export const useLoading = async () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.loading.status);

  if(status != LoadingStatus.No) return;

  await Aviasales.loadOne();
  await Carriers.loadImages(Aviasales.ticketsOne as TicketObject[]);
  dispatch(setStatus(LoadingStatus.CompleteOne));

  await Aviasales.loadAll();
  await Carriers.loadImages(Aviasales.ticketsAll as TicketObject[]);
  dispatch(setStatus(LoadingStatus.CompleteAll));
}
