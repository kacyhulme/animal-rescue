import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

// const urlForUsername = username => 
// 'https://api.github.com/users/kacyhulme'

class FetchAnimalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    };
  }
  componentDidMount() {
    fetchJsonp('http://api.petfinder.com/pet.getRandom?key=188e82af8c0e73cb8c812bc704fed454&type=dog&location=78703&output=full&format=json')
      .then(res => {
        return res.json();
      }).then(function(j) {
        console.log(j);
      });
  }

  render() {
    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {this.state.dogs.map(dog =>
            <li key={dog.id}>{dog.title}</li>
          )}
        </ul>
      </div>
    );
  }
}
export default FetchAnimalData;
