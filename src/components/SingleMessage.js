import React, {useState, useEffect} from 'react';

const SingleMessage = ({messages}) => {
 
  return (
    <div className="user-messages">
   {
       messages
       ? messages.map((e)=>{
         return (
           <div 
           className="post-message"
           key={e._id}>
               <h2>Message from: {e.fromUser.username}</h2>
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