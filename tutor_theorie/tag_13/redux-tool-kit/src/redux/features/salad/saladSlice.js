import { createSlice } from "@reduxjs/toolkit"
import { removed as burgerRemoved } from "../burger/burgerSlice"

const initialState = {
    numOfSalads: 20
}

const saladSlice = createSlice({
    name: "salad",
    initialState,
    reducers: {
        // "salad/added"
        added: (state, {payload = 1}) => {
            // payload = Anzahl
            state.numOfSalads = state.numOfSalads + payload
        },
        // "salad/removed"
        removed: (state, {payload = 1}) => {
            // payload = Anzahl
            state.numOfSalads = state.numOfSalads - payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(burgerRemoved, (state, {payload = 1}) => {
            if (payload >= 3) {
                state.numOfSalads--
            }
        })
    }
})

export default saladSlice.reducer
export const { added, removed } = saladSlice.actions