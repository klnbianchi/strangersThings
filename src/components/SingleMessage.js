import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'

const SingleMessage = ({messages, userId}) => {
const {mPostId}=useParams()
  return (
    <div>
   {
       messages.length
       ? messages.map((e, idx)=>{

         return (
           <div 
           className="post-message"
           key={`message${idx} ${e._id}`}>
               <h2>Message from: <span className="post-username">{e.fromUser.username}</span></h2>
               <p>{e.content}</p>
               <Link 
               className='single-message-link'
               to={`/posts/${e.post._id}`}>View Post</Link>
               </div>
         )
       })
       : null
   }
   
    </div>
  )
}

export default SingleMessage;