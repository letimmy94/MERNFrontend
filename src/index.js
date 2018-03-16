import React from "react";
import ReactDOM from "react-dom";
import Post from "./App.js";
import "./index.css";

const post = {
  name: "Funny Gif",
  url: "http://www.ohiofi.com/img/catdance1.gif"
};

ReactDOM.render(
  <Post name={post.name} url={post.url} />,
  document.getElementById("root")
);
