import React from 'react';
import SinglePost from './SinglePost'

const SearchResultsPage = ({allPosts, keyword}) => {
  // filter posts and find posts that match the keyword. 
  // pass the filtered results into the all posts prop in the single post component
//   allPosts.filter(post=>{
// if (post.title.contai)
//   });
  console.log(keyword)
  return (
    <div className="posts">
   <SinglePost allPosts={allPosts} />
    </div>
  ) 
}

export default SearchResultsPage;