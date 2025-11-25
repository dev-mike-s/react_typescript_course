import React, { Component } from 'react';
import Table from './Table';

class Main extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            category: 0,
            cart: []
        }
    }

    changeCategory = () => {
        this.setState((currentState) => {
            
            /* if (currentState.category) {
                // category = 1
                return {
                    category: 0
                }
            } else {
                // category = 0
                return {
                    category: 1
                }
            } */

            /* return {
                category: currentState.category ? 0 : 1
            } */

            
            return {
                category: 1 - currentState.category
            }

        })
    }

    addToCart = (product) => {
        this.setState((currentState) => {
            return {
                cart: [...currentState.cart, product]
            }
        })
    }

    removeFromCart(i) {
        this.setState((currentState) => {
            return {
                cart: currentState.cart.filter((ele, index) => {
                    return i != index
                })
            }
        })
    }
    
    products = [
        {
            'name': 'Bücher',
            'items': [
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Carrie',
                    'Jahr': 1974,
                    'Seiten': 199,
                    'Verlag': 'Doubleday'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'The Shining',
                    'Jahr': 1977,
                    'Seiten': 447,
                    'Verlag': 'Doubleday'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Christine',
                    'Jahr': 1983,
                    'Seiten': 526,
                    'Verlag': 'Viking'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'It',
                    'Jahr': 1986,
                    'Seiten': 1138,
                    'Verlag': 'Viking'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Misery',
                    'Jahr': 1987,
                    'Seiten': 310,
                    'Verlag': 'Viking'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Joyland',
                    'Jahr': 2013,
                    'Seiten': 288,
                    'Verlag': 'Hard Case Crime'
                }
            ]
        },
        {
            'name': 'Audio-Books',
            'items': [
                {
                    'Autor': 'Stephen King',
                    'Titel': 'On Writing: A Memoir of the Craft ',
                    'Jahr': 2000,
                    'Länge': 120,
                    'Verlag': 'Simon & Schuster Audio'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Salem\'s Lot (introduction)',
                    'Jahr': 2004,
                    'Länge': 180,
                    'Verlag': 'Simon & Schuster Audio'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Bag of Bones',
                    'Jahr': 2005,
                    'Länge': 240,
                    'Verlag': 'Simon & Schuster Audio'
                }
            ]
        }
    ]

    render() {
        return (
            <main>
                <button onClick={this.changeCategory}>Produktkategorie wechseln</button>
                <h2>{this.products[this.state.category].name}</h2>
                <Table data={this.products[this.state.category].items}
                addToCart={this.addToCart} />

                {
                    this.state.cart.length > 0 &&
                    (<>
                        <h3>Warenkorb</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Autor</th>
                                    <th>Titel</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.cart.map((ele, index) => {
                                        // ele = Objekt
                                        return (<tr key={index}>
                                            <td>{ele.Autor}</td>
                                            <td>{ele.Titel}</td>
                                            <td className="button" onClick={() => {
                                                this.removeFromCart(index)
                                            }}>Entfernen</td>
                                        </tr>)
                                    })
                                }
                            </tbody>
                        </table>
                    </>)
                }

            </main>
        );
    }
}

export default Main;