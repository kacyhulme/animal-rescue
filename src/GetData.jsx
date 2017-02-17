import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

// const urlForUsername = username => 
// 'https://api.github.com/users/kacyhulme'

class FetchAnimalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    fetchJsonp('http://api.petfinder.com/pet.getRandom?key=188e82af8c0e73cb8c812bc704fed454&type=dog&location=78703&output=full&format=json')
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}
export default FetchAnimalData;
