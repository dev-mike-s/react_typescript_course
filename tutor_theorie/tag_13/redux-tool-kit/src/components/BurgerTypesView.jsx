import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { typeAdded, typeRemoved } from "../redux/features/burger/burgerSlice"

function BurgerTypesView(props) {

    const typesOfBurgers = useSelector((state) => {
        return state.burger.typesOfBurgers
    })

    const dispatch = useDispatch()

    const [eingabe, setzeEingabe] = useState("")

    return (
        <div>
            <h4>Arten von Hamburger</h4>
            <input type="text" value={eingabe}
            onChange={(e) => {
                setzeEingabe(e.target.value)
            }} />
            <button onClick={() => {
                /* props.burgerTypeAdded(eingabe) */
                dispatch(typeAdded(eingabe))
            }} disabled={!eingabe}>Hinzufügen</button>
            <ul>
                {
                    typesOfBurgers.map((ele, index) => {
                        // ele = String
                        return (<li key={index}>
                            <button onClick={() => {
                                /* props.burgerTypeRemoved(index) */
                                dispatch(typeRemoved(index))
                            }}>Löschen</button>
                            {ele}
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}

export default BurgerTypesView