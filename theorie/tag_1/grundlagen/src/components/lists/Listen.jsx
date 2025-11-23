import ListenKind from "./ListenKind"

function Listen() {

    let namen = ["Diana", "Bruce", "Clark"]

    /* let ausgabe = [
        <div>{namen[0]}</div>,
        <div>{namen[1]}</div>,
        <div>{namen[2]}</div>
    ] */

    return (
        <div>
            <h2>Listen</h2>

            {
                namen.map((value) => {
                    // value = String
                    return <div>{value}</div>
                })
            }

            <ol>
            {
                namen.map((value) => {
                    // value = String
                    return <li>{value}</li>
                })
            }
            </ol>

            {
                namen.map((value, index) => {
                    // value = String
                    return <ListenKind name={value} i={index} />
                })
            }

        </div>
    )
}

export default Listen