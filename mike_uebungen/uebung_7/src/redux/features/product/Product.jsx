import { connect } from "react-redux";
import mapStateToProps from "../redux/mapStateToProps";
import mapDispatchToProps from "../redux/mapDispatchToProps";
import { useNavigate } from "react-router";

function Product(props) {
  const navigate = useNavigate();

  const SPALTEN_DEF = [
    [
      [
        {
          key: "titel",
          label: "Titel",
        },
        {
          key: "jahr",
          label: "Jahr",
        },
        {
          key: "publisher",
          label: "Publisher",
        },
        {
          key: "preis",
          label: "Preis",
        },
      ],
      [
        {
          key: "autor",
          label: "Autor",
        },
        {
          key: "titel",
          label: "Titel",
        },
        {
          key: "jahr",
          label: "Jahr",
        },
        {
          key: "seiten",
          label: "Seiten",
        },
        {
          key: "verlag",
          label: "Verlag",
        },
        {
          key: "preis",
          label: "Preis",
        },
      ],
      [
        {
          key: "autor",
          label: "Autor",
        },
        {
          key: "titel",
          label: "Titel",
        },
        {
          key: "jahr",
          label: "Jahr",
        },
        {
          key: "laenge",
          label: "Länge",
        },
        {
          key: "verlag",
          label: "Verlag",
        },
        {
          key: "preis",
          label: "Preis",
        },
      ],
    ],
    [
      [
        {
          key: "titel",
          label: "Titel",
        },
        {
          key: "hersteller",
          label: "Hersteller",
        },
        {
          key: "preis",
          label: "Preis",
        },
      ],
      [
        {
          key: "titel",
          label: "Titel",
        },
        {
          key: "beschreibung",
          label: "Beschreibung",
        },
        {
          key: "preis",
          label: "Preis",
        },
      ],
    ],
  ];

  return (
    props.detailauswahl && (
      <>
        <>
          <h2>Produktdetails</h2>
          <table>
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
          <button>Zurück</button>
        </>
      </>
    )
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
