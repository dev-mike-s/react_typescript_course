import React from 'react';

function TableRow({ Autor, Titel, Jahr, Seiten, Laenge, Verlag }) {
  console.log(Autor, Titel, Jahr, Seiten, Laenge, Verlag);
  return (
    <tr>
      <td>{Autor}</td>
      <td>{Titel}</td>
      <td>{Jahr}</td>
      <td>{Seiten ? Seiten : ''}</td>
      <td>{Laenge ? Laenge : ''}</td>
      <td>{Verlag}</td>
    </tr>
  );
}

export default TableRow;
