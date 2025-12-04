// Action Types
import {
    BURGER_ADDED,
    BURGER_REMOVED,
    BURGER_TYPE_REMOVED,
    BURGER_TYPE_ADDED
} from './actionTypes'

const initialState = {
    numOfBurgers: 10,
    typesOfBurgers: ["classic", "cheese", "chicken"]
}

const reducerBurger = (state = initialState, action) => {

    switch (action.type) {

        // Burger hinzufügen
        case BURGER_ADDED:
            // action.payload = Anzahl
            return {
                ...state, // alle Properties auflisten
                numOfBurgers: state.numOfBurgers + action.payload
            }

        // Burger abziehen
        case BURGER_REMOVED:
            // action.payload = Anzahl
            return {
                ...state,
                numOfBurgers: state.numOfBurgers - action.payload
            }
            /* if (action.payload >= 3) {
                return {
                    ...state,
                    numOfBurgers: state.numOfBurgers - action.payload,
                    numOfSalads: state.numOfSalads - 1
                }
            } else {
                return {
                    ...state,
                    numOfBurgers: state.numOfBurgers - action.payload
                }
            } */

        // Burger-Typ hinzufügen
        case BURGER_TYPE_ADDED:
            // action.payload = String
            return {
                ...state,
                typesOfBurgers: [...state.typesOfBurgers, action.payload]
            }

        // Burger-Typ löschen
        case BURGER_TYPE_REMOVED:
            // action.payload = Index
            return {
                ...state,
                typesOfBurgers: state.typesOfBurgers.filter((ele, index) => {
                    return index != action.payload
                })
            }

        default:
            return state

    }
}

export default reducerBurger