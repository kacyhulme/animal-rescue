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

class AnimalGallery extends Component {
  constructor() {
    super();

    this.state = {
      showAnimalDetails: false
    };
  }

  _handleClick(id) {
    this.setState({ showAnimalDetails: true});
    this.setState({num : id});
  }
  _getAnimals() {
    const animals=[{id: 0, name:"Sammy", weight: "600lbs", age: 14, city: "Montgomery", cost: 460}, {id: 1, name:"Sal", weight: "900lbs", age: 2, city: "Waxville", cost: 600}, {id: 2, name:"Hank", weight: "800lbs", age: 13, city: "Willmington", cost: 350}, {id: 3, name:"Topanga", weight: "650lbs", age: 8, city: "Thomasville", cost: 450}, {id: 4, name:"Ralph", weight: "700lbs", age: 6, city: "Killington", cost: 500}];
    
    return( 
      <div className="animal-gallery" >
      <div className="animal-list-wrapper">
      <ul>
      { animals.map(animal => 
        <li key={animal.id}>
        <div><button onClick={() => this._handleClick(animal.id)} type="button">{animal.name}</button></div>
        <div><img src={animalpic} className="animal-pic" alt="logo" /></div>
        </li> )}
      </ul>
      </div>
      <div className="animal-details-wrapper">{ this.state.showAnimalDetails ? <AnimalDetails animal={ animals[this.state.num] } /> : null }</div>
      </div>
      )
  }
  render() {
    const animals= this._getAnimals();
    
    return (
      <div>
      <h3>Our babies</h3>
      <div>
      {animals}
      </div>
      </div>
      );
  }
};

class AnimalDetails extends Component {
  render() {
    //console.log(this.props.animal)
    return (
      <div id="animaldetails" className="animal-details">
      <p>Animal Details</p>
      <p>Name: {this.props.animal.name}</p>
      <p>Weight: {this.props.animal.weight}</p>
      <p>Age: {this.props.animal.age}</p>
      <p>City of Birth: {this.props.animal.city}</p>
      <p>Monthly Feeding Costs: {this.props.animal.cost}</p>
      <CommentBox />
      </div>
      );
  }
};

class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: [{id: 1, author: 'Greta', body: 'Ok, thanks.'}]
    };
  }
  render() {
    return (
      <div><CommentForm addComment={this._addComment.bind(this)} />
      <div>{this._getComments()}</div>
      </div>
      )
  }
  _addComment(author,body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({ comments: this.state.comments.concat([comment]) });
  }
  _getComments() {
    return this.state.comments.map((comment) => {
      return (
        <Comment 
        author={comment.author}
        body={comment.body}
        key={comment.id}
        />
        );
    });
  }
}

class Comment extends React.Component {
  render(){
    return (
      <div>
      <div>{this.props.author}</div>
      <div>{this.props.body}</div>
      </div>
      )
  }
}

class CommentForm extends React.Component {

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
      <label>
      Name:
      <input placeholder="Name:" ref={(input) => this._author = input} />
      </label>
      <label>
      Comment:
      <textarea placeholder="Comment:" ref={(textarea) => this._body = textarea} />
      </label>
      <input type="submit" value="Submit" />
      </form>
      );
  }

  _handleSubmit(event) {
    event.preventDefault();

    let author = this._author;
    let body = this._body;
    this.props.addComment(author.value, body.value); //addComment passed down from parent 
  }
}
export default App;
