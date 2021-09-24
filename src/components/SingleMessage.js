import React, {useState, useEffect} from 'react';

const SingleMessage = ({messages, userId}) => {

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
               </div>
         )
       })
       : null
   }
   
    </div>
  )
}

export default SingleMessage;