import TableRowBook from "./TableRowBook";

type Ele = string | number;
type Index = number;

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
        {props.data.map((ele: Ele, index: Index) => {
          // ele = Objekt
          return <TableRowBook book={ele} i={index} />;
        })}
      </tbody>
    </table>
  );
}

export default TableBooks;
