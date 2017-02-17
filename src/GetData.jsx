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

  _getTheData(){
    fetchJsonp('http://api.petfinder.com/pet.getRandom?key=188e82af8c0e73cb8c812bc704fed454&type=dog&location=78703&output=full&format=json')
    .then(res => {
      this._setTheData(res);
      return res.json();
    })
  }

  _setTheData(d) {
    this.setState({
      dogs: d
    });
  }


  componentDidMount() {
    this._getTheData();
  }

  render() {
    return (
      <div>
      <div> Fetch Animal Data Component </div>
      <DisplayAnimalData data={this.state.dogs} />
      </div>
      );
  }
}


class DisplayAnimalData extends Component {
  render() {
    return (
      <div>
      <div> Display Animal Data Component</div>
      </div>
      )
  }
}

export default FetchAnimalData;






//this._saveAnimal();
        // this.setState[
        // { dogname: j.petfinder.pet.name},
        // { age: j.petfinder.pet.age},
        // { animal: j.petfinder.pet.animal},
        // { breeds: j.petfinder.pet.breeds},
        // { contact: j.petfinder.pet.contact},
        // { description: j.petfinder.pet.description},
        // { id: j.petfinder.pet.id},
        // { lastUpdate: j.petfinder.pet.lastUpdate},
        // { media: j.petfinder.pet.media},
        // { mix: j.petfinder.pet.mix},
        // { options: j.petfinder.pet.options},
        // { sex: j.petfinder.pet.sex},
        // { shelterId: j.petfinder.pet.shelterId},
        // { shelterPetId: j.petfinder.pet.shelterPetId},
        // { size: j.petfinder.pet.size},
        // { status: j.petfinder.pet.status}]