
import { async } from 'q';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPosts, fetchUserData} from './api'
import {getToken} from './auth'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { 
  Post, 
  Login, 
  Register 
} from "./components"

const App = () => {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const [userName, setUserName] = useState('');
  const [allPosts, setAllPosts] = useState([]);

  useEffect(async () => {
    const posts = await fetchAllPosts();
    setAllPosts(posts)
  }, []);

  useEffect(async () => {
    const userToken = getToken();
    const userInfo = await fetchUserData(userToken);
    setUserPosts(userInfo.posts);
    setUserName(userInfo.username)
  }, []);

  return (
    <div id="App">
      <h1>Hello, World!!!</h1>
      <Login />
      <Register />
      <Post
       allPosts={allPosts}
       />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);