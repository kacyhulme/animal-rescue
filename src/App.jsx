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
    return { showAnimalDetails: false};

  },
  handleClick: function(id) {
    this.setState({ showAnimalDetails: true});
    this.setState({num : id});
    //console.log(id);
  },
  _getAnimals: function() {
    const animals=[{id: 1, name:"Sammy", weight: "600lbs", age: 14, city: "Montgomery", cost: 460}, {id: 2, name:"Sal", weight: "900lbs", age: 2, city: "Waxville", cost: 600}, {id: 3, name:"Hank", weight: "800lbs", age: 13, city: "Willmington", cost: 350}, {id: 4, name:"Topanga", weight: "650lbs", age: 8, city: "Thomasville", cost: 450}, {id: 5, name:"Ralph", weight: "700lbs", age: 6, city: "Killington", cost: 500}];
    
      return( 
        <div>
        <ul>
        { animals.map(animal => 
          <li>
          <div><button onClick={() => this.handleClick(animal.id)} type="button">{animal.name}{animal.id}</button></div>
          <div><img src={animalpic} className="animal-pic" alt="logo" /></div>
          </li> )}
        </ul>
        <div className="animal-details-wrapper">{ this.state.showAnimalDetails ? <AnimalDetails animals={(animals[this.state.num])} /> : null }</div>
        </div>
        )
  },
  render() {
    const animals= this._getAnimals();
    
    return (
      <div className="animal-gallery">
      <h3>Our babies</h3>
      <div className="animal-list-wrapper">
      {animals}
      </div>
      </div>
      );
  }
});

class AnimalDetails extends Component {
  render() {
    //console.log("words")
    return (
      <div id="animaldetails" className="animal-details">
      <p>Animal Details</p>
      <p>Weight: {this.props.animal.weight}</p>
      <p>Age: {this.props.animal.age}</p>
      <p>City of Birth: {this.props.animal.city}</p>
      <p>Monthly Feeding Costs: {this.props.animal.cost}</p>
      </div>
      );
  }
};
export default App;
