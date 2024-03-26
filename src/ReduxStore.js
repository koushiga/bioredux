import { configureStore } from "@reduxjs/toolkit";
import slice from './ReduxSlice';

export const store=configureStore({
    reducer:{
       person: slice,
    }
})