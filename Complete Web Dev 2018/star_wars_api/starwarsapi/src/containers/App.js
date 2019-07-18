import React, { Component } from 'react';
import CardList from '../components/CardList';
import './App.css';

const peopleArr = [
  'https://swapi.co/api/people/1/',
  'https://swapi.co/api/people/2/',
  'https://swapi.co/api/people/3/',
  'https://swapi.co/api/people/4/',
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      starWarsPeople: [],
    }
  }

  componentDidMount() {
    Promise.all(peopleArr.map(arr =>
      fetch(arr).then(resp => resp.json())
    )).then(actors => {this.setState({starWarsPeople: actors})});
  }

  render() {
    const{starWarsPeople} = this.state;
    return !starWarsPeople.length ?
      <h1>Loading</h1> :
      (
        <div>
          <h1>Star Wars API</h1>
          <CardList starWarsPeople={this.state.starWarsPeople} />
        </div>
      );
    }
}

export default App;
