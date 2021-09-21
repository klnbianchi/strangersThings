
import { async } from 'q';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import {Post, Login, Register } from "./components"

const App = () => {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div id="App">
      <h1>Hello, World!!!</h1>
      <Login />
      <Register />
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