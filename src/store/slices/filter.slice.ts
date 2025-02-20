import { createSlice } from '@reduxjs/toolkit';

export type FilterObject = {
  zero: boolean;
  one: boolean;
  two: boolean;
  three: boolean;
}

export interface IFilterState {
  current: FilterObject;
}

const initialState: IFilterState = {
  current: {
    zero: true,
    one: true,
    two: true,
    three: true,
  }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.current = action.payload;
    },
  },
})

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
