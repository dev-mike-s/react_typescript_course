import { useDispatch } from "react-redux"
import { added, removed } from "../redux/features/burger/burgerSlice"

function BurgerActions(props) {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => {
                /* props.burgerAdded(10) */
                dispatch(added(10))
            }}>Hinzufügen (10)</button><br />
            <button onClick={() => {
                /* props.burgerRemoved() */
                dispatch(removed())
            }}>Verringern (1)</button><br />
            <button onClick={() => {
                /* props.burgerRemoved(5) */
                dispatch(removed(5))
            }}>Verringern (5)</button>
        </div>
    )
}

export default BurgerActions