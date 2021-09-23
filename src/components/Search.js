import React, { useState } from 'react';
import StLogo from '../images/stLogo.png';
import { useHistory } from 'react-router-dom';

const Search = ({ keyword, setKeyword }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/posts/searchresults');
  }

  return (
    <div className="search-bar-main">
      <img className="st-logo-search" src={StLogo} />

      <form
        className="search-bar"
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}>

        <input
          type="text"
          id="postSearch"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Posts" />
        <button
          className="material-icons">
          search
            </button>
      </form>
    </div>
  )
}

export default Search;