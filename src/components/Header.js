import React from 'react';
import StLogoHorizontal from '../images/st-horizontal.png'

const Header = ({ isLoggedIn, userName }) => {
  return (

    <div>
      {
        !isLoggedIn
          ? <div className="welcome-header">
            <h1>Welcome to</h1>
            <img className="welcome-logo" src={StLogoHorizontal}/>
            <p>Please login to add posts and contact sellers</p>
          </div>
          : <div className="welcome-header">
            <h1>Welcome {userName}!</h1>
            </div>
      }



    </div>
  )
}

export default Header;