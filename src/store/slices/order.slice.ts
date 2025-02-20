import { createSlice } from '@reduxjs/toolkit';
import { OrderSelectorMode } from '../../api/types/OrderSelectorMode';

interface IOrderState {
    current: OrderSelectorMode;
}

const initialState: IOrderState = {
    current: OrderSelectorMode.CHEAPEST,
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.current = action.payload;
        },
    },
})

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;
