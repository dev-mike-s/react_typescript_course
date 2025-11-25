import { Component } from 'react'

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            vorname: ""
        }
    }

    daten = {
        anbieter: [
            'T-Immobile',
            'Fodafon',
            'H2O',
            '0&0',
            'Crashed',
            'GMNiX'
        ],
        datenvolumen: [
            {
                name: 'ab 250 MB',
                preis: 0.99
            },
            {
                name: 'ab 500 MB',
                preis: 1.49
            },
            {
                name: 'ab 1 GB',
                preis: 1.99
            },
            {
                name: 'ab 2 GB',
                preis: 2.99
            },
            {
                name: 'ab 3 GB',
                preis: 5.99
            },
            {
                name: 'ab 5 GB',
                preis: 7.99
            },
            {
                name: 'ab 10 GB',
                preis: 12.99
            },
            {
                name: 'ab 15 GB',
                preis: 15.99
            },
            {
                name: 'unbegrenzt',
                preis: 19.99
            }
        ],
        minuten: [
            {
                name: 'ab 100 Minuten',
                preis: 0.99
            },
            {
                name: 'ab 200 Minuten',
                preis: 1.99
            },
            {
                name: 'ab 300 Minuten',
                preis: 3.99
            },
            {
                name: 'Telefon-Flat',
                preis: 7.99
            }
        ],
        handys: {
            hersteller: [
                'Apple', 'Samsung', 'Sony', 'Nokia'
            ],
            modelle: [
                {
                    name: '0815/1',
                    preis: 99.99
                },
                {
                    name: '0815/2',
                    preis: 299.99
                },
                {
                    name: '0815/3',
                    preis: 499.99
                },
                {
                    name: '0815/4',
                    preis: 699.99
                },
                {
                    name: '0815/5',
                    preis: 899.99
                }
            ]
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form>
                <div>
                    <h2>Persönliche Daten</h2>
                    <label>Vorname</label>
                    <input required type="text"
                    name="vorname" value={this.state.vorname}
                    onChange={this.inputHandler} />
                    <label>Nachname</label>
                    <input required type="text" />
                    <label>E-Mail</label>
                    <input required type="email" />
                    <div>
                        <button type="button">Weiter</button>
                    </div>
                </div>
                <div>
                    <h2>Anbieter</h2>
                    <select required>
                        <option value="-1">Bitte Anbieter wählen</option>
                        {
                            this.daten.anbieter.map((ele, index) => {
                                // ele = String
                                return <option key={index} value={index}>{ele}</option>
                            })
                        }
                    </select>
                    <div>
                        <button type="button">Zurück</button>&nbsp;
                        <button type="button">Weiter</button>
                    </div>
                </div>
                <div>
                    <h2>Datenvolumen</h2>
                    <select required>
                        <option value="-1">Bitte Datenvolumen wählen</option>
                        {
                            this.daten.datenvolumen.map((ele, index) => {
                                // ele = Objekt
                                return <option key={index} value={index}>{ele.name}, {ele.preis} EUR</option>
                            })
                        }
                    </select>
                    <div>
                        <button type="button">Zurück</button>&nbsp;
                        <button type="button">Weiter</button>
                    </div>
                </div>
                <div>
                    <h2>Freiminuten</h2>
                    <select required>
                        <option value="-1">Bitte Minuten wählen</option>
                        {
                            this.daten.minuten.map((ele, index) => {
                                // ele = Objekt
                                return <option key={index} value={index}>{ele.name}, {ele.preis} EUR</option>
                            })
                        }
                    </select>
                    <div>
                        <button type="button">Zurück</button>&nbsp;
                        <button type="button">Weiter</button>
                    </div>
                </div>
                <div>
                    <h2>Handys</h2>
                    <select required>
                        <option value="none">Handy mitbestellen?</option>
                        <option value="y">Ja</option>
                        <option value="n">Nein</option>
                    </select>
                    <div>
                        <h3>Herstellerauswahl</h3>
                        <select required>
                            <option value="-1">Bitte Hersteller wählen</option>
                            {
                                this.daten.handys.hersteller.map((ele, index) => {
                                    // ele = String
                                    return <option key={index} value={index}>{ele}</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <h3>Modellauswahl</h3>
                        <select required>
                            <option value="-1">Bitte Modell wählen</option>
                            {
                                this.daten.handys.modelle.map((ele, index) => {
                                    // ele = Objekt
                                    return <option key={index} value={index}>{ele.name}, {ele.preis} EUR</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <button type="button">Zurück</button>&nbsp;
                        <button type="button">Weiter</button>
                    </div>
                </div>
                <div>
                    <h2>Zusammenfassung</h2>
                    <h3>Ihre Daten</h3>
                    <p>Vorname:</p>
                    <p>Nachname:</p>
                    <p>E-Mail:</p>
                    <h3>Tarifdaten</h3>
                    <p>Anbieter:</p>
                    <p>Datenvolumen:</p>
                    <p>Freiminuten:</p>
                    <div>
                        <h3>Handy</h3>
                        <p>Hersteller:</p>
                        <p>Modell:</p>
                    </div>
                    <button type="button">Zurück</button>&nbsp;
                    <button type="button">Bestellen</button>
                </div>
                <div>
                    <h2>Danke für Ihre Bestellung!</h2>
                </div>
            </form>
        )
    }
}

export default Main