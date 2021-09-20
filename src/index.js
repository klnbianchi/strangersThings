
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import StLogoHorizontal from './images/st-horizontal.png'
import { fetchAllPosts, fetchUserData } from './api'
import { getToken } from './auth'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  useParams
} from 'react-router-dom'

import {
  Posts,
  Header,
  Login,
  Register,
  Profile,
  DropdownMenu,
  UserPosts,
  Messages,
  SinglePostPage,
  SendMessage,
} from "./components"

const App = () => {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const [userName, setUserName] = useState('');
  const [allPosts, setAllPosts] = useState([]);
  const [post, setPost]=useState([]);

  useEffect(async () => {
    const posts = await fetchAllPosts();
    setAllPosts(posts);
  }, []);

  useEffect(async () => {
    const userToken = getToken();
    const userInfo = await fetchUserData(userToken);
    setUserPosts(userInfo.posts);
    setUserName(userInfo.username)
  }, []);

  return (
    <div id="App">
      <nav className="nav-bar">
        <section>
          <img className="logo-horizontal" src={StLogoHorizontal} />
        </section>
        <section className="nav-bar-links">
          <Link className="nav-link" to="/">HOME</Link>
          <Link className="nav-link" to="/posts">POSTS</Link>
          <DropdownMenu />
          <Link className="nav-link" to="/login"> {isLoggedIn ? 'LOGOUT' : 'LOGIN'} </Link>
          {console.log(isLoggedIn)}
        </section>
      </nav>

      <Switch>
        <Route path="/posts/:postId">
          <SinglePostPage allPosts={allPosts}
         />
        </Route>
        <Route exact path="/posts">
          <Posts allPosts={allPosts}
          />
        </Route>

        <Route exact path="/login">
          <Login
            setIsLoggedin={setIsLoggedin}
            setIsLoading={setIsLoading} />
        </Route>
        <Route path="/login/register">
          <Register
            setIsLoggedin={setIsLoggedin}
            setIsLoading={setIsLoading} />
        </Route>
        <Route exact path="/profile">
          <Profile
            setIsLoggedin={setIsLoggedin}
            setIsLoading={setIsLoading}
            userPosts={userPosts}
            userName={userName} />
        </Route>
        <Route path="/profile/messages">
          <Messages
            setIsLoggedin={setIsLoggedin}
            setIsLoading={setIsLoading}
            userPosts={userPosts}
            userName={userName} />
        </Route>
        <Route exact path="/profile/userposts">
          <UserPosts
            setIsLoggedin={setIsLoggedin}
            setIsLoading={setIsLoading}
            userPosts={userPosts}
            userName={userName} />
        </Route>
        <Route exact path="/">
          <Header />
        </Route>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);