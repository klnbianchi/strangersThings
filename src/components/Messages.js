import React from 'react';
import { Link, Route, Switch, useParams } from 'react-router-dom';
import { SingleMessage } from './';

const Messages = ({ messages, userId, allPosts, userPosts }) => {
  const { userPostId } = useParams();
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

  const postWithMessage = userPosts.filter(post => {
    if (post._id === userPostId) {
      return post
    }
  });

  return (
    <div className='messages-main'>
      <div className="messages-links">
        <Link
          className="m-link"
          to="/profile/messages/inbox">
          <h2><span className="material-icons">inbox</span> Inbox</h2>
        </Link>
        <Link
          className="m-link"
          to="/profile/messages/sent">
          <h2><span className="material-icons">send</span> Sent</h2>
        </Link>
      </div>

      <Switch>
        <Route exact path="/profile/messages/inbox">
          <div className="received-messages">
            <h3>Inbox</h3>
            {
              messages.length
                ? <SingleMessage
                  messages={receivedMessages}
                  userId={userId}
                  allPosts={allPosts} />
                : <div className="messages-page">
                  <h2>You have not received any messages.</h2>
                </div>
            }
          </div>
        </Route>
        <Route exact path="/profile/messages/sent">
          <div className='sent-messages'>
            <h3>Sent</h3>
            {
              sentMessages.length
                ? <SingleMessage
                  messages={sentMessages}
                  userId={userId} />
                : <div className="messages-page">
                  <h2>You have not sent any messages.</h2>
                </div>
            }
          </div>
        </Route>
      </Switch>

    </div>
  )
}

export default Messages;


