
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { Post, Login } from "./components"

const App = () => {
  return (
    <div id="App">
      <h1>Hello, World!!!</h1>
      <Login />
      <Post />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);