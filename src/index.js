import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import StLogoHorizontal from './images/st-horizontal.png'
import { fetchAllPosts, fetchUserData,fetchAllMessages } from './api'
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
  SingleUserPostPage
} from "./components"

const App = () => {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const [userName, setUserName] = useState('');
  const [allPosts, setAllPosts] = useState([]);
  const [messages, setMessages]=useState([]);
  const [editPost, setEditPost] = useState(false);

 
  useEffect(async () => {
    const posts = await fetchAllPosts();
    setAllPosts(posts);
  }, []);

  useEffect(async () => {
    try{
      const userToken = getToken();
      const userInfo = await fetchUserData(userToken);
      setUserPosts(userInfo.posts);
      setUserName(userInfo.username);
      setMessages(userInfo.messages);
       
//       const postArr=userInfo.posts;
//       let userMessages

// for(let i=0;i<postArr.length;i++){
//   if (postArr[i].messages.length){
//     userMessages=[...postArr[i].messages]
//   }
// }
//  setMessages(userMessages);
//  console.log(userMessages)
    }catch(err){
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
          <DropdownMenu />
          <Link className={`nav-link ${!isLoggedIn? 'show' : 'hide'}`} to="/login">LOGIN</Link>
          {console.log(isLoggedIn)}
          <Link className={`nav-link ${isLoggedIn ? 'show' : 'hide'}`} to="/login">LOGOUT</Link>

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
            messages={messages} />
        </Route>
        <Route exact path="/profile/userposts">
          <UserPosts
            setIsLoggedin={setIsLoggedin}
            setIsLoading={setIsLoading}
            userPosts={userPosts}
            userName={userName}
            setEditPost={setEditPost}
     
             />
        </Route>
        <Route path="/profile/userposts/:userPostId">
          <SingleUserPostPage 
          userPosts={userPosts}
          userName={userName}
          messages={messages}
          editPost={editPost}
          setEditPost={setEditPost}
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
