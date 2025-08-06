import { configureStore } from "@reduxjs/toolkit";
import CartSlice from '../Redux/CartSlice'
export const Store = configureStore({
    reducer: {
        mycart: CartSlice
    },
    devTools: true
})