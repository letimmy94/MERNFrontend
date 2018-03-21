import React, { Component } from "react";
import "./Gifs.css";

class GifBox extends Component {
  render() {
    return (
      <div className="gifbox">
        <h3>{this.props.gifbox.name}</h3>
        <img src={this.props.gifbox.url} />
      </div>
    );
  }
}

export default GifBox;
