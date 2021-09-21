import React, {useState, useEffect} from 'react';

const SingleMessage = ({messages}) => {
 
useEffect(()=>{
console.log(messages, 'from single message')
},[])
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