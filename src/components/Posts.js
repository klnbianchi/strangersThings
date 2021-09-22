import React, { useEffect, useState } from 'react';

import CreatePost from './CreatePost'
import SinglePost from './SinglePost';
import Search from './Search'

const Posts = ({allPosts, setKeyword, keyword, isLoggedIn}) => {
 
    return (
        <div className="posts-main">
             <Search
             setKeyword={setKeyword}
             keyword={keyword}
             allPosts={allPosts} />

            <div className="posts">
                <h2>Stranger's Posts</h2>
                {
                    allPosts.length
                        ? <SinglePost allPosts={allPosts} />
                        : null
                }
            </div>
            <div className="create-post">
                {
                    isLoggedIn
                    ?<CreatePost />
                    :null
                }
                
            </div>
        </div>
    )
}

export default Posts;