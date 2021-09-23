import React, {useEffect, useState} from 'react';
import {SingleMessage} from './'

const Messages = ({messages}) => {

  return (
    <div className='user-messages'>
   {
     messages
     ? <SingleMessage messages={messages} />
     : <div className="messages-page">
       <h2>You have not sent or received any messages.</h2>
       </div>
   }
    </div>
  )
}

export default Messages;
