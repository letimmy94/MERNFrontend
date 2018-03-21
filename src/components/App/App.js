// bring in React and Component instance from React
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import axios from "axios";
import GifBox from "../GifBox/GifBox.js";
import Header from "../Header/Header.js";
import "./App.css";

// define our component
class App extends Component {
  constructor() {
    super();
    this.state = {
      gifbox: []
    };
    this.gifts = this.gifts.bind(this);
  }
  componentDidMount() {
    this.gifts();
  }
  gifts() {
    axios.get("http://localhost:3001/gifbox").then(res => {
      this.setState({ gifts: res.data });
    });
  }
  // what should the component render
  render() {
    var gifs = this.state.gifs;
    var output = gifs.map(gif => {
      return gif;
    });
    // Make sure to return some UI
    return (
      <Router>
        <div>
          <nav>
            <h1>MOVING PICTURES</h1>
            <Link to="/gifbox">Gifs</Link>
          </nav>
          <main>
            <div className="jifsr">
              {gifs.map(gif => {
                return <Gif gif={gif} />;
              })}
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
