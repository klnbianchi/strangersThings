import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import StLogoHorizontal from './images/st-horizontal.png'
import { fetchAllPosts, fetchUserData } from './api'
import { clearCurrentUser, getToken } from './auth'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  useParams,
  useHistory
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
  SingleUserPostPage,
  SearchResultsPage
} from "./components"

const App = () => {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const [userName, setUserName] = useState('');
  const [allPosts, setAllPosts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [editPost, setEditPost] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [userId, setUserId] = useState('');
  const history = useHistory();
  const auth = getToken();

  const handleClick = () => {
    history.push('/login');
  }

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
      console.log(err)
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
              setIsLoggedin(false);
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
            isLoggedIn={isLoggedIn}
            setMessages={setMessages}
            messages={messages}
          />
        </Route>

        <Route exact path="/posts">
          <Posts allPosts={allPosts}
            keyword={keyword}
            setKeyword={setKeyword}
            isLoggedIn={isLoggedIn}
            setAllPosts={setAllPosts}
            setUserPosts={setUserPosts}
            userId={userId}
          />
        </Route>

        <Route exact path="/login">
          <Login
            setIsLoggedin={setIsLoggedin}
            setIsLoading={setIsLoading}
          />
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
            messages={messages}
            userId={userId} />
        </Route>
        <Route exact path="/profile/userposts">
          <UserPosts
            setIsLoggedin={setIsLoggedin}
            setIsLoading={setIsLoading}
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
            editPost={editPost}
            setEditPost={setEditPost}
            isLoggedIn={isLoggedIn}
            setUserPosts={setUserPosts}
          />
        </Route>
        <Route exact path="/">
          <Header
            isLoggedIn={isLoggedIn}
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
