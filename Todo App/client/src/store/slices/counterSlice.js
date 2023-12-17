import { createSlice } from "@reduxjs/toolkit";
const saveCounter = (list) => {
    localStorage.setItem('counter', list);
}

const counterSlice = createSlice({
    name: "counter",
    initialState: {counter: JSON.parse(localStorage.getItem('counter')) || 0},
    reducers: {
        increment: (state) => {
            state.counter += 1;
            saveCounter(state.counter);
        },
        decrement: (state) => {
            state.counter -= 1;
            saveCounter(state.counter);
        }
    }
})
export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;