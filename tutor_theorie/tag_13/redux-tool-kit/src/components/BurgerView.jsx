import { useSelector } from "react-redux"

function BurgerView(props) {

    const numOfBurgers = useSelector((state) => {
        return state.burger.numOfBurgers
    })
    /*
    Ein useSelector-Aufruf für jede Eigenschaft:
    const typesOfBurgers = useSelector((state) => {
        return state.burger.typesOfBurgers
    })
    */

    return (
        <div>
            <h2>Burger</h2>
            Auf Lager: {numOfBurgers}
        </div>
    )
}

export default BurgerView