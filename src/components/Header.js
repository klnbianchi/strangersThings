import React from 'react';
import StLogoHorizontal from '../images/st-horizontal.png'
import Register from './Register'
import {getToken} from '../auth'

const Header = ({ isLoggedIn, userName }) => {
  const auth=getToken();

  return (

    <div>
      {
        !auth
          ? <div className="welcome-header">
            <h1>Welcome to</h1>
            <img className="welcome-logo" src={StLogoHorizontal}/>
            <div className="welcome-body">
            <Register />
            </div>
          </div>
          : <div className="welcome-header">
             <h1>Welcome to</h1>
            <img className="welcome-logo" src={StLogoHorizontal}/>
            <h2>{userName}!</h2>
            </div>
      }



    </div>
  )
}

export default Header;