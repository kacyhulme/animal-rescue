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
    fetch(`http://www.reddit.com/r/${this.props.subreddit}.json`)
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
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}
export default FetchAnimalData;