import { createSlice } from '@reduxjs/toolkit';

export enum LoadingStatus {
  No = "No",
  CompleteOne = "CompleteOne",
  CompleteAll = "CompleteAll",
}

export interface ILoadingState {
  status: LoadingStatus;
}

const initialState: ILoadingState = {
  status: LoadingStatus.No,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
})

export const { setStatus } = loadingSlice.actions;
export default loadingSlice.reducer;
