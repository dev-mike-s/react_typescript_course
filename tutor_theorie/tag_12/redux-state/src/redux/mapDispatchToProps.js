// Action Types
import {
    BURGER_ADDED,
    BURGER_REMOVED,
    SALAD_ADDED,
    SALAD_REMOVED,
    BURGER_TYPE_REMOVED,
    BURGER_TYPE_ADDED
} from './actionTypes'

const mapDispatchToProps = (dispatch) => {
    return {
        // Burger hinzufügen
        burgerAdded: (qty = 1) => {
            dispatch({
                type: BURGER_ADDED,
                payload: qty
            })
        },
        // Burger verringern
        burgerRemoved: (qty = 1) => {
            dispatch({
                type: BURGER_REMOVED,
                payload: qty
            })
        },
        // Salat hinzufügen
        saladAdded: (qty = 1) => {
            dispatch({
                type: SALAD_ADDED,
                payload: qty
            })
        },
        // Salat verringern
        saladRemoved: (qty = 1) => {
            dispatch({
                type: SALAD_REMOVED,
                payload: qty
            })
        },
        // Burger-Typ hinzufügen
        burgerTypeAdded: (newType) => {
            dispatch({
                type: BURGER_TYPE_ADDED,
                payload: newType
            })
        },
        // Burger-Typ löschen
        burgerTypeRemoved: (index) => {
            dispatch({
                type: BURGER_TYPE_REMOVED,
                payload: index
            })
        }
    }
}

export default mapDispatchToProps