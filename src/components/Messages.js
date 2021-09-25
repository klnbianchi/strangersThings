import React, { useEffect, useState } from 'react';
import {Link, Route, Switch, useParams} from 'react-router-dom';
import { SingleMessage } from './';
import UserPosts from './UserPosts'

const Messages = ({ messages, userId, allPosts, userPosts }) => {
  const {userPostId, mPostId}=useParams();
  const sentMessages = messages.filter(e => {
    if (e.fromUser._id === userId) {
      return e
    }
  });

  const receivedMessages = messages.filter(e => {
    if (e.fromUser._id !== userId) {
      return e
    }
  });

   const postMessages = messages.filter(e => {
        if (e.post._id && e.post._id === userPostId) {
            return e
        }
    });

const postWithMessage =userPosts.filter(post=>{
  if (post._id === userPostId){
    return post
  }
});
console.log(postWithMessage)
  return (

    <div className='messages-main'>
      <div className="messages-links">
       <Link className="m-link" to="/profile/messages/inbox"> <h2><span className="material-icons">inbox</span> Inbox</h2></Link>
       <Link className="m-link" to="/profile/messages/sent"><h2><span className="material-icons">send</span> Sent</h2></Link>
       </div>
    
       <Switch>
         <Route exact path ="/profile/messages/inbox">
         <div className="received-messages">
           <h3>Inbox</h3>
         {
          messages.length
            ? <SingleMessage
              messages={receivedMessages}
              userId={userId} />
            : <div className="messages-page">
              <h2>You received any messages.</h2>
            </div>
        }
        </div>
         </Route>
         <Route path="/profile/messages/inbox/:mPostId">
           <UserPosts userPosts={postWithMessage} />
         </Route>
         <Route exact path ="/profile/messages/sent">
         <div className='sent-messages'>
           <h3>Sent</h3>
        {
          sentMessages.length
            ? <SingleMessage
              messages={sentMessages}
              userId={userId} />
            : <div className="messages-page">
              <h2>You sent any messages.</h2>
            </div>
        }
      </div>
         </Route>
       </Switch>

    </div>
  )
}

export default Messages;


