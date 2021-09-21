import React from 'react';

const Header = ({ isLoggedIn, userName }) => {
  return (
    <div>
      {
        !isLoggedIn
          ? <div>
            <h1>Welcome to Stranger's Things</h1>
            <p>Please login to add posts and contact sellers</p>
          </div>
          : <div>
            <h1>Welcome {userName}!</h1>
            </div>
      }


    </div>
  )
}

export default Header;