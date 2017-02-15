import React, { Component } from 'react';

//this works, but how to iterate over everything that is returned

const urlForUsername = 'https://api.github.com/users/kacyhulme'

class FetchAnimalData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      githubData: {}
    }
  }
  componentDidMount() {
    fetch(urlForUsername)
    .then(d => d.json())
    .then(d => {
      this.setState({
        githubData: d
      })
    })
  }
  render() {
    //this should work but it's not
    if(!this.state.githubData) return <p> Loading... </p>
      return <div><ul>
    { Object.keys(this.state.githubData).forEach(function(k,v) {
      <li>{k}{v}</li>
    })
  }
  </ul></div>

  }


}
export default FetchAnimalData;