import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./slices/counter.js";

export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
});

