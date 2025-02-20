import { configureStore } from '@reduxjs/toolkit';
import { orderSlice } from './slices/order.slice';
import { filterSlice } from './slices/filter.slice';
import { loadingSlice } from './slices/loading.slice';

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    order: orderSlice.reducer,
    loading: loadingSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
