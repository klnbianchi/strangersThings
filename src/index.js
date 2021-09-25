import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import StLogoHorizontal from './images/st-horizontal.png';
import { fetchAllPosts, fetchUserData } from './api';
import { clearCurrentUser, getToken } from './auth';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

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
  SingleUserPostPage,
  SearchResultsPage,
} from "./components";

const App = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [userName, setUserName] = useState('');
  const [allPosts, setAllPosts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [userId, setUserId] = useState('');
  const auth = getToken();

  useEffect(async () => {
    const posts = await fetchAllPosts();
    setAllPosts(posts);
  }, []);

  useEffect(async () => {
    try {
      const userToken = getToken();
      const userInfo = await fetchUserData(userToken);
      setUserPosts(userInfo.posts);
      setUserName(userInfo.username);
      setMessages(userInfo.messages);
      setUserId(userInfo._id);
    } catch (err) {
      console.log(err);
    }
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
          {auth
            ? <DropdownMenu />
            : null
          }

          <Link className={`nav-link ${!auth ? 'show' : 'hide'}`} to="/login">LOGIN</Link>

          <Link
            className={`nav-link ${auth ? 'show' : 'hide'}`}
            to="/login"
            onClick={() => {
              clearCurrentUser();
            }}>
            LOGOUT
            </Link>
        </section>
      </nav>

      <Switch>
        <Route exact path="/posts/searchresults">
          <SearchResultsPage
            allPosts={allPosts}
            keyword={keyword}
          />
        </Route>

        <Route exact path="/posts/:postId">
          <SinglePostPage
            allPosts={allPosts}
            userId={userId}
            setMessages={setMessages}
            messages={messages}
          />
        </Route>

        <Route exact path="/posts">
          <Posts allPosts={allPosts}
            keyword={keyword}
            setKeyword={setKeyword}
            setAllPosts={setAllPosts}
            setUserPosts={setUserPosts}
            userId={userId}
          />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/login/register">
          <Register />
        </Route>
        <Route exact path="/profile">
          <Profile
            userPosts={userPosts}
            userName={userName} />
        </Route>
        <Route path="/profile/messages">
          <Messages
            messages={messages}
            userId={userId}
            allPosts={allPosts}
            userPosts={userPosts} />
        </Route>
        <Route exact path="/profile/userposts">
          <UserPosts
            userPosts={userPosts}
            userName={userName}
            setUserPosts={setUserPosts}
          />
        </Route>
        <Route path="/profile/userposts/:userPostId">
          <SingleUserPostPage
            userPosts={userPosts}
            userName={userName}
            messages={messages}
            setUserPosts={setUserPosts}
          />
        </Route>
        <Route exact path="/">
          <Header
            userName={userName} />
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
