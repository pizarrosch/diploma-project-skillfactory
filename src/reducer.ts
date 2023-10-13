import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const dummySlice = createSlice({
    name: 'price',
    initialState: 0,
    reducers: {
        addPrice: (state: number, action: PayloadAction<number>) => {
            return state + action.payload;
        },
        subtractPrice: (state: number, action: PayloadAction<number>) => {
            return Math.abs(state - action.payload);
        }
    }
})

export const {addPrice, subtractPrice} = dummySlice.actions;