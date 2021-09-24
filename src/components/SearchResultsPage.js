import React from 'react';
import SinglePost from './SinglePost'

const SearchResultsPage = ({ allPosts, keyword }) => {
  const filteredPosts = allPosts.filter(e => {
    const title = e.title.toLowerCase();
    const description = e.description.toLowerCase();
    const price = String(e.price);
    const queryArr = keyword.toLowerCase().split(' ');

    for(let i=0;i<queryArr.length;i++){
      if (title.includes(queryArr[i]) || description.includes(queryArr[i]) || price.includes(queryArr[i])) {
        return e
      }
    }
    
  });

  return (
    <div className="posts">
      <SinglePost allPosts={filteredPosts} />
    </div>
  )
}

export default SearchResultsPage;

