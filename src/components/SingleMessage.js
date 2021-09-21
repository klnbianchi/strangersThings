import React, {useState, useEffect} from 'react';

const SingleMessage = ({messages}) => {
 
  // console.log(messages[0], "from single message component")
  return (
    <div className="user-messages">
   {
       messages.length
       ? messages.map((e)=>{
           <div 
           className="post-message"
           key={e._id}>
               <h2>Message from: {e.fromUser.username}</h2>
               <p>{e.content}</p>
               </div>
       })
       : <h2>No Messages</h2>
   }
   
    </div>
  )
}

export default SingleMessage;