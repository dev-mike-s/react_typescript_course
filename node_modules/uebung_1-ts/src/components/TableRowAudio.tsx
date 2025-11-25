//import type { Books, Audio } from "./Main";

//type Props = Books & Audio;
//function TableRowAudio(props: Props) {
function TableRowAudio(props) {
  /* 
    props:
     - audio: Objekt
     - i: Zahl (Index)
    */

  return (
    <tr className={props.i % 2 ? "odd" : undefined}>
      <td>{props.audio.Autor}</td>
      <td>{props.audio.Titel}</td>
      <td>{props.audio.Jahr}</td>
      <td>{props.audio["Länge"]}</td>
      <td>{props.audio.Verlag}</td>
    </tr>
  );
}

export default TableRowAudio;
