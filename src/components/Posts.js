import React, { useEffect, useState } from 'react';

import CreatePost from './CreatePost'
import SinglePost from './SinglePost';
import Search from './Search'

const Posts = ({allPosts}) => {
    

    return (
        <div className="posts-main">
             <Search
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
                <CreatePost />
            </div>
        </div>
    )
}

export default Posts;