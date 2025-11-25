import React from 'react';
import TableRow from './TableRow';

function Table(props) {

    /*
    * props:
    * - data: Array
    * - addToCart: Funktion
    */

    const KEYS_ARRAY = Object.keys(props.data[0])

    return (
        <table>
            <thead>
                <tr>
                    {
                        KEYS_ARRAY.map((ele, index) => {
                            // ele = String
                            return <th key={index}>{ele}</th>
                        })
                    }
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((ele, index) => {
                        // ele = Objekt
                        return <TableRow key={index} product={ele} i={index} addToCart={props.addToCart} />
                    })
                }
            </tbody>
        </table>
    );
}

export default Table;