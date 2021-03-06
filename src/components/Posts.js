import React, { useEffect } from 'react';
import { fetchAllPosts } from '../api';
import { getToken } from '../auth';
import CreatePost from './CreatePost';
import SinglePost from './SinglePost';
import Search from './Search';

const Posts = ({ allPosts, setKeyword, keyword, userId, setAllPosts, setUserPosts }) => {
    const auth = getToken();

    useEffect(async () => {
        const posts = await fetchAllPosts();
        setAllPosts(posts);
    }, []);

    return (
        <div className="posts-main">
            <div className="search-posts">
                <Search
                    setKeyword={setKeyword}
                    keyword={keyword}
                    allPosts={allPosts}
                />
            </div>

            <div className="posts">
                <h2>Stranger's Posts</h2>
                {
                    allPosts.length
                        ? <SinglePost allPosts={allPosts} />
                        : null
                }
            </div>
            <div className="create-post">
                {auth
                    ? <CreatePost
                        setAllPosts={setAllPosts}
                        allPosts={allPosts}
                        setUserPosts={setUserPosts}
                        userId={userId} />
                    : null
                }
            </div>
        </div>
    )
}

export default Posts;