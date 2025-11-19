import TableRowBook from "./TableRowBook"

function TableBooks(props) {

    /* 
    props:
     - data: Array (books/audio)
    */

    return (
        <table>
            <thead>
                <tr>
                    <th>Autor</th>
                    <th>Titel</th>
                    <th>Jahr</th>
                    <th>Seiten</th>
                    <th>Verlag</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((ele, index) => {
                        // ele = Objekt
                        return <TableRowBook book={ele} i={index} />
                    })
                }
            </tbody>
        </table>
    )
}

export default TableBooks