import { Component } from 'react';
import Table from './Table.jsx';

export class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categorySwitch: true,
      //'Bücher' | 'Audio-Books': []
    };

    /*  this.state = {
      counter: 0,
      error: false
    }  */

    this.products = [
      {
        name: 'Bücher',
        items: [
          {
            Autor: 'Stephen King',
            Titel: 'Carrie',
            Jahr: 1974,
            Seiten: 199,
            Verlag: 'Doubleday',
          },
          {
            Autor: 'Stephen King',
            Titel: 'The Shining',
            Jahr: 1977,
            Seiten: 447,
            Verlag: 'Doubleday',
          },
          {
            Autor: 'Stephen King',
            Titel: 'Christine',
            Jahr: 1983,
            Seiten: 526,
            Verlag: 'Viking',
          },
          {
            Autor: 'Stephen King',
            Titel: 'It',
            Jahr: 1986,
            Seiten: 1138,
            Verlag: 'Viking',
          },
          {
            Autor: 'Stephen King',
            Titel: 'Misery',
            Jahr: 1987,
            Seiten: 310,
            Verlag: 'Viking',
          },
          {
            Autor: 'Stephen King',
            Titel: 'Joyland',
            Jahr: 2013,
            Seiten: 288,
            Verlag: 'Hard Case Crime',
          },
        ],
      },
      {
        name: 'Audio-Books',
        items: [
          {
            Autor: 'Stephen King',
            Titel: 'On Writing: A Memoir of the Craft ',
            Jahr: 2000,
            Länge: 120,
            Verlag: 'Simon & Schuster Audio',
          },
          {
            Autor: 'Stephen King',
            Titel: "Salem's Lot (introduction)",
            Jahr: 2004,
            Länge: 180,
            Verlag: 'Simon & Schuster Audio',
          },
          {
            Autor: 'Stephen King',
            Titel: 'Bag of Bones',
            Jahr: 2005,
            Länge: 240,
            Verlag: 'Simon & Schuster Audio',
          },
        ],
      },
    ];

    this.switchProductcategory = this.switchProductcategory.bind(this);
  }

  switchProductcategory = () => {
    this.setState((currentState) => {
      return {
        categorySwitch: !currentState.categorySwitch
      }
    }, () => { console.log(this.state.counter); })
  };

  debugger;
  render() {
    return (

      <main>
        <div>Main</div>
        <button onClick={this.switchProductcategory}>
          Produktkategorie wechseln
        </button>
        {this.state.categorySwitch ? <h2>Bücher</h2> : <h2>Audio-Books</h2>}
        && {this.state.categorySwitch ? <div><Table data={products.name[0] = { books }} /></div> :
          <Table data={products.name[0] = { books }} />}

        { /* 
        <Table data={products} />
        <Table data={BOOKS} />
        <h2>Audio-Books</h2>
        <Table data={AUDIO} />
        */ }

      </main>

    )
  }
}

export default Main;
