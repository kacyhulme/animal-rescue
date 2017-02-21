import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

// const urlForUsername = username => 
// 'https://api.github.com/users/kacyhulme'

class FetchAnimalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      someword: "someword"
    };
  }

  _setTheData(jsondata) {
    this.setState({
      dogs: jsondata,
    });
    //this works, 
    console.log(jsondata)


    const d = jsondata;
    Object.keys(d).map(function(key) {
      console.log(<option key={key} value={key}>{d[key]}</option>)
    });


    return jsondata
  }

  _getTheData(){
    fetchJsonp('http://api.petfinder.com/pet.getRandom?key=188e82af8c0e73cb8c812bc704fed454&type=dog&location=78703&output=full&format=json')
    .then(res => {
      return res.json();
    }).then(json => {
      //this works, console.log(json.petfinder.pet)
      this._setTheData(json.petfinder.pet);
    })
  }


  componentDidMount() {
    this._getTheData();
    //this works, console.log(this)
  }

  render() {
    return (
      <div>
      <DisplayAnimalData thedata={this.state.jsondata} />
      </div>
      );
  }
}


class DisplayAnimalData extends Component {

  render() {
    //this is working
    const d = {1: 'Joe', 2: 'Jane'};
    //but i need the dog data from the FetchData component, like const d = { thedata }
    var dogdata = Object.keys(d).map(function(key) {
      return <option key={key} value={key}>{d[key]}</option>
    });

    return (
      <div>
      <div> {dogdata} </div>
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