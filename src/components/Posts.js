import React, { useEffect, useState } from 'react';

import CreatePost from './CreatePost'
import SinglePost from './SinglePost';

const Posts = ({allPosts}) => {
    

    return (
        <div className="posts-main">
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