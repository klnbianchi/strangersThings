
import { async } from 'q';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { Post } from "./components"

const App = () => {
//   const [posts, setPosts] = useState([]);
//   console.log('posts:', posts);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const resp = await fetch ('https://jsonplace-univclone.herokuapp.com/posts');
//       const data = await resp.json();
//       console.log('data: ', data);
//       setPosts(data);
//     }

//     fetchPosts();

//   }, [])

//   return (
//     <div id="App">
//       <h1>Stranger Things</h1>
//       {
//         posts.map(post => <div>key={post.id}
//         {post.title}</div>)
//       }
//       <Header />
//     </div>
//   );
  return (
    <div id="App">
      <h1>Hello, World!!!</h1>
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