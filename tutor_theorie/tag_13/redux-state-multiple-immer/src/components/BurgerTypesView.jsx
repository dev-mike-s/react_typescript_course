import { useState } from "react"
// connect() stellt die Verbindung zu Redux her
import { connect } from "react-redux"
// zum Lesen des Redux-States brauchen wir die mapStateToProps-Funktion
import mapStateToProps from "../redux/mapStateToProps"
// zum Ändern des Redux-States brauchen wir die mapDispatchToProps-Funktion
import mapDispatchToProps from "../redux/mapDispatchToProps"

function BurgerTypesView(props) {

    const [eingabe, setzeEingabe] = useState("")

    return (
        <div>
            <h4>Arten von Hamburger</h4>
            <input type="text" value={eingabe}
            onChange={(e) => {
                setzeEingabe(e.target.value)
            }} />
            <button onClick={() => {
                props.burgerTypeAdded(eingabe)
            }} disabled={!eingabe}>Hinzufügen</button>
            <ul>
                {
                    props.typesOfBurgers.map((ele, index) => {
                        // ele = String
                        return (<li key={index}>
                            <button onClick={() => {
                                props.burgerTypeRemoved(index)
                            }}>Löschen</button>
                            {ele}
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerTypesView)