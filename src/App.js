import React, { Component } from 'react';
import logo from './bird-basic-draw.svg';
import animalpic from './cow-pic.jpg';
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

var AnimalGallery = React.createClass ({
  getInitialState: function() {
    return { showAnimalDetails: false };
  },
  handleClick: function() {
    this.setState({ showAnimalDetails: true });
  },
  render() {
    const animals = ["Sammy", "Sal", "Hank", "Topanga", "Ralph"];
    return (
      <div className="animal-gallery">
      <h3>Our babies</h3>
        <div>
        <ul>
          { animals.map(animal => 
            <li>
              <div><button onClick={this.handleClick} type="button">{animal}</button></div>
              <div><img src={animalpic} className="animal-pic" alt="logo" /></div>
            </li> )}
        </ul>
      </div>
      <div>{ this.state.showAnimalDetails ? <AnimalDetails /> : null }</div>
      </div>
      );
  }
});

class AnimalDetails extends Component {
  render() {
    return (
      <div id="animaldetails" className="animal-details">
      Animal Details: 
      Weight:
      Age:
      City of Birth:
      Monthly Feeding Costs:
      </div>
      );
  }
}
export default App;
