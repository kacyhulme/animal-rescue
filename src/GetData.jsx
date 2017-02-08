import React, { Component } from 'react';

const urlForUsername = username => 
'https://api.github.com/users/kacyhulme'

class FetchAnimalData extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    fetch(urlForUsername(this.props.username))
    .then(d => d.json())
    .then(d => {
      this.setState({
        githubData: d
      })
    })
  }
  render() {
    if(!this.state.githubData) return <p> Loading... </p>
    return(
      <div>{this.state.githubData.login}</div>
      )
    
  }
}
export default FetchAnimalData;
