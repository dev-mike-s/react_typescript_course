import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router";
import "./App.css";
import Select from "./components/Select";
import Table from "./components/Table";
import Cart from "./components/Cart";

function App() {
  const PRODUKTE = [
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

  // Formular
  const [formular, setzeFormular] = useState({
    hauptkategorie: "-1",
    unterkategorie: "-1",
  });
  // Formularwerte aktualisieren
  const aendereKategorie = (e) => {
    setzeFormular((currentState) => {
      if (e.target.name === "hauptkategorie") {
        // hauptkategorie
        return {
          [e.target.name]: e.target.value,
          unterkategorie: "-1",
        };
      } else {
        // unterkategorie
        return {
          ...currentState,
          [e.target.name]: e.target.value,
        };
      }
    });
  };

  // Warenkorb
  const [warenkorb, setzeWarenkorb] = useState([]);
  // Hinzufügen zum Warenkorb
  const hinzufuegenZumWarenkorb = (artikel) => {
    setzeWarenkorb((currentState) => {
      return [...currentState, artikel];
    });
  };
  // Entfernen vom Warenkorb
  const entfernenVomWarenkorb = (index) => {
    setzeWarenkorb((currentState) => {
      return currentState.filter((ele, i) => {
        return index != i;
      });
    });
  };
  /* 
  In dieser Reihenfolge wird hier der
  Initialwert vom "warenkorb" gespeichert,
  also ein leeres Array und damit
  jeder vorher gespeicherte Wert
  überschrieben.

  useEffect(() => {
    const WARENKORB_STRING = JSON.stringify(warenkorb)
    localStorage.setItem("warenkorb", WARENKORB_STRING)
  }, [warenkorb])
  */

  // Laden vom WebStorage
  useEffect(() => {
    // Warenkorb
    const WARENKORB_STRING = localStorage.getItem("warenkorb");
    if (WARENKORB_STRING != null) {
      const WARENKORB_ARRAY = JSON.parse(WARENKORB_STRING);
      setzeWarenkorb(WARENKORB_ARRAY);
    }
    // Formular
    const FORMULAR_STRING = localStorage.getItem("formular");
    if (FORMULAR_STRING != null) {
      const FORMULAR_OBJEKT = JSON.parse(FORMULAR_STRING);
      setzeFormular(FORMULAR_OBJEKT);
    }
  }, []);

  // Warenkorb speichern
  useEffect(() => {
    const WARENKORB_STRING = JSON.stringify(warenkorb);
    localStorage.setItem("warenkorb", WARENKORB_STRING);
  }, [warenkorb]);

  // Formular speichern
  useEffect(() => {
    const FORMULAR_STRING = JSON.stringify(formular);
    localStorage.setItem("formular", FORMULAR_STRING);
  }, [formular]);

  return (
    <div id="container">
      <header>
        <h1>Bücher und Mehr</h1>
      </header>
      <nav className="clearfix">
        <NavLink to="/">
          <div>Shop</div>
        </NavLink>
        <NavLink to="/cart">
          <div>Warenkorb ({warenkorb.length})</div>
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Select
                  produkte={PRODUKTE}
                  formular={formular}
                  aendereKategorie={aendereKategorie}
                />
                <Table
                  produkte={PRODUKTE}
                  formular={formular}
                  hinzufuegenZumWarenkorb={hinzufuegenZumWarenkorb}
                />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                warenkorb={warenkorb}
                entfernenVomWarenkorb={entfernenVomWarenkorb}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
