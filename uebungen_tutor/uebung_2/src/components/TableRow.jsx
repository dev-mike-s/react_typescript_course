import React from 'react';

function TableRow(props) {

    /*
    * props:
    * - product: Objekt
    * - i: Index (Zahl)
    * - addToCart: Funktion
    */
   
    const VALUES_ARRAY = Object.values(props.product)

    return (<tr className={props.i % 2 ? "odd" : undefined}>
        {
            VALUES_ARRAY.map((ele, index) => {
                return <td key={index}>{ele}</td>
            })
        }
        <td className="button" onClick={() => {
            props.addToCart(props.product)
        }}>In den Warenkorb</td>
    </tr>)
}

export default TableRow;