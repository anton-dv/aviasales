import { Aviasales } from "../api/Aviasales";
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { LoadingStatus, setStatus } from "../store/slices/loading.slice";

export const useLoading = async () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.loading.status);

  if(status != LoadingStatus.No) return;

  await Aviasales.loadOne();
  dispatch(setStatus(LoadingStatus.CompleteOne));

  await Aviasales.loadAll();
  dispatch(setStatus(LoadingStatus.CompleteAll));
}
