// bring in React and Component instance from React
import React, { Component } from "react";

// define our component
class Post extends Component {
  // what should the component render
  render() {
    // Make sure to return some UI
    return (
      <div className="postpage">
        <h1>{this.props.name}</h1>
        <p>{this.props.url}</p>
      </div>
    );
  }
}

export default Post;
