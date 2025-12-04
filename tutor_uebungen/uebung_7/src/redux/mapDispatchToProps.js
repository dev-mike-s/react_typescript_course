import {
    LOAD_FORM,
    CHANGE_CATEGORY,
    LOAD_CART,
    ADD_TO_CART,
    REMOVE_FORM_CART,
    SET_DETAIL_SELECTION
} from "./actionTypes"

const mapDispatchToProps = (dispatch) => {
    return {
        speichereFormular: (formular) => {
            dispatch({
                type: LOAD_FORM,
                payload: formular
            })
        },
        aendereKategorie: (event) => {
            dispatch({
                type: CHANGE_CATEGORY,
                payload: event
            })
        },
        speichereWarenkorb: (warenkorb) => {
            dispatch({
                type: LOAD_CART,
                payload: warenkorb
            })
        },
        hinzufuegenZumWarenkorb: (artikel) => {
            dispatch({
                type: ADD_TO_CART,
                payload: artikel
            })
        },
        entfernenVomWarenkorb: (index) => {
            dispatch({
                type: REMOVE_FORM_CART,
                payload: index
            })
        },
        setzeDetailauswahl: (artikel) => {
            dispatch({
                type: SET_DETAIL_SELECTION,
                payload: artikel
            })
        }
    }
}

export default mapDispatchToProps