import React from 'react'


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

export default CommentBox;