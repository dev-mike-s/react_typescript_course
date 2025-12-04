import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    numOfBurgers: 10,
    typesOfBurgers: ["classic", "cheese", "chicken"]
}

const burgerSlice = createSlice({
    name: "burger",
    /* initialState: initialState */
    initialState,
    reducers: {
        // "burger/added"
        added: (state, {payload = 1}) => {
            // Als "state" wird eine Kopie des States übergeben.

            // const { payload = 1 } = action
            
            // payload = Anzahl
            state.numOfBurgers = state.numOfBurgers + payload
        },
        // "burger/removed"
        removed: (state, {payload = 1}) => {
            // payload = Anzahl
            state.numOfBurgers = state.numOfBurgers - payload
        },
        // "burger/typeAdded"
        typeAdded: (state, action) => {
            // payload = String (neue Element)
            state.typesOfBurgers.push(action.payload)
        },
        // "burger/typeRemoved"
        typeRemoved: (state, action) => {
            // payload = Index (zu löschendes Element)
            state.typesOfBurgers.splice(action.payload, 1)
        }
    }
})

export default burgerSlice.reducer
export const { added, removed, typeAdded, typeRemoved } = burgerSlice.actions