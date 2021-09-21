import React from 'react';
import { Link, Route, Switch  } from 'react-router-dom'

const Profile = ({userPosts, userName}) => {
  return (
    <div className='profile-outer'>
   <h2>{userName}'s Profile</h2>
    </div>
  )
}

export default Profile;