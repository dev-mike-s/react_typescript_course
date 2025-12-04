const mapStateToProps = (state) => {
    return {
        // eine Reducer-Funktion:
        // ...state
        // mehrere Reducer-Funktionen kombiniert:
        ...state.burger,
        ...state.salad
    }
}

export default mapStateToProps