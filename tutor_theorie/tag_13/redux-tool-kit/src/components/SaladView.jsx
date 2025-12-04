import { useSelector, useDispatch } from "react-redux"
import { added, removed } from '../redux/features/salad/saladSlice'

function SaladView(props) {

    const numOfSalads = useSelector((state) => {
        return state.salad.numOfSalads
    })

    const dispatch = useDispatch()

    return (
        <div>
            <h2>Salate</h2>
            Auf Lager: {numOfSalads}<br />
            <button onClick={() => {
                /* props.saladAdded(20) */
                dispatch(added(20))
            }}>Hinzufügen (20)</button><br />
            <button onClick={() => {
                /* props.saladRemoved(5) */
                dispatch(removed(5))
            }}>Verringern (5)</button>
        </div>
    )
}

export default SaladView