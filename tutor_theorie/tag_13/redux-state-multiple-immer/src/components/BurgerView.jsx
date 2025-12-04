// connect() stellt die Verbindung zu Redux her
import { connect } from "react-redux"
// zum Lesen des Redux-States brauchen wir die mapStateToProps-Funktion
import mapStateToProps from "../redux/mapStateToProps"

function BurgerView(props) {

    return (
        <div>
            <h2>Burger</h2>
            Auf Lager: {props.numOfBurgers}
            {/*
            Falls in  mapStateToProps nicht die
            einzelnen Teil-States gemappt werden,
            dann muss man wir folgt auf die
            eigentlichen Eigenschaften zugreifen:
            Auf Lager: {props.burger.numOfBurgers}
            */}
        </div>
    )
}

export default connect(mapStateToProps) (BurgerView)
// Higher Order Component (HOC)