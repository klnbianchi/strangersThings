import React from 'react';
import { Link } from 'react-router-dom';

const SingleMessage = ({ messages }) => {

  return (
    <div>
      {
        messages.length
          ? messages.map((e, idx) => {

            return (
              <div
                className="post-message"
                key={`message${idx} ${e._id}`}>
                <h2>Message from: <span className="post-username">{e.fromUser.username}</span></h2>
                <p>{e.content}</p>
                {
                  <Link
                    className='single-message-link'
                    to={`/posts/${e.post._id}`}>View Post</Link>}
              </div>
            )
          })
          : null
      }
    </div>
  )
}

export default SingleMessage;