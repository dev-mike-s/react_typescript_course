// Action Types
import {
    SALAD_ADDED,
    SALAD_REMOVED,
    BURGER_REMOVED
} from './actionTypes'

const initialState = {
    numOfSalads: 20
}

const reducerSalad = (state = initialState, action) => {

    switch (action.type) {

        // Salat hinzufügen
        case SALAD_ADDED:
            // action.payload = Anzahl
            return {
                ...state,
                numOfSalads: state.numOfSalads + action.payload
            }

        // Salat abziehen
        case SALAD_REMOVED:
            // action.payload = Anzahl
            return {
                ...state,
                numOfSalads: state.numOfSalads - action.payload
            }

        // Burger abziehen
        case BURGER_REMOVED:
            // action.payload = Anzahl
            if (action.payload >= 3) {
                return {
                    ...state,
                    numOfSalads: state.numOfSalads - 1
                }
            }

        default:
            return state

    }
}

export default reducerSalad