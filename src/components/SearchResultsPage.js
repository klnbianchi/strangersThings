import React from 'react';
import SinglePost from './SinglePost'

const SearchResultsPage = ({ allPosts, keyword }) => {
  const filteredPosts = allPosts.filter(e => {
    const title = e.title.toLowerCase();
    const description = e.description.toLowerCase();
    const price = String(e.price);
    const query = keyword.toLowerCase();

    if (title.includes(query) || description.includes(query) || price.includes(query)) {
      return e
    }
  });

  return (
    <div className="posts">
      <SinglePost allPosts={filteredPosts} />
    </div>
  )
}

export default SearchResultsPage;

