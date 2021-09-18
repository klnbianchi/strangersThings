import React, { useEffect, useState } from 'react';
import { fetchAllPosts } from '../api';
import CreatePost from './CreatePost'

const Posts = (props) => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(async () => {
        const posts = await fetchAllPosts();
        setAllPosts(posts)
    }, []);

    return (
        <div className="posts-main">
            <div className="posts">
                <h2>Stranger's Posts</h2>
                {
                    allPosts.length
                        ? allPosts.map(e => {
                            return (
                                <div
                                    key={e._id}
                                    className="user-posts">
                                    <h3 className="post-title">{e.title} </h3>
                                    <p className="post-description">{e.description}</p>
                                    <p><span className="post-des-info">Price:</span> {e.price} </p>
                                    <p><span className="post-des-info">Seller:</span> {e.author.username} </p>
                                    <p><span className="post-des-info">Location:</span> {e.location} </p>
                                    <p><span className="post-des-info">Willing to Deliver?:</span> {e.willDeliver ? "Yes" : "No"} </p>
                                </div>
                            )
                        })
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