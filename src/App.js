import React, { Component } from 'react';
import logo from './bird-basic-draw.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Animal Rescue</h2>
        </div>
        <p className="App-intro">
          Welcome! We have so many animals who need your help!
        </p>
        <AnimalGallery></AnimalGallery>
      </div>
    );
  }
}

class AnimalGallery extends Component {
  render() {
    const animals = ["Sammy", "Sal", "Hank", "Topanga", "Ralph"];
    return (
      <div className="animal-gallery">
        <h3>Our babies</h3>
        <ul>
        { animals.map( animal => <li> {animal} </li> )}
        </ul>
      </div>
    );
  }
}
export default App;
