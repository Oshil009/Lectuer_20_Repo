import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        totalIncrements: 0,
        totalDecrements: 0,
        history: []
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
            state.totalIncrements += 1;
            state.history.push({ action: "Increment", timestamp: new Date().toLocaleTimeString(), change: '+1' })
        },
        decrement: (state) => {
            state.value -= 1;
            state.totalDecrements += 1;
            state.history.push({ action: "Decrement", timestamp: new Date().toLocaleTimeString(), change: '-1' })
        },
        reset: (state) => {
            state.value = 0;
            state.totalDecrements = 0;
            state.totalIncrements = 0;
            state.history.push({ action: "Reset", timestamp: new Date().toLocaleTimeString(), change: "Rest value" })
        },
        incrementByAmount: (state, action) => {
            state.value += Number(action.payload);
            state.totalIncrements += 1;
            state.history.push({
                action: `Added ${action.payload}`,
                timestamp: new Date().toLocaleTimeString(),change: `+${action.payload}`
            });
        },
        clearHistory: (state) => {
            state.history = [];
        }
    }
})
export const { increment, decrement, reset, incrementByAmount, clearHistory } = counterSlice.actions;
export default counterSlice.reducer;