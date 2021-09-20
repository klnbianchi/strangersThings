import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserPosts = ({userPosts, userName}) => {
 
    return (
        <div className="user-posts-main">
            <h2>{userName}'s Posts</h2>
            <div className="user-posts-posts">
                {
                    userPosts
                        ? userPosts.map(e => {
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
                                    
                                   <Link to={`/profile/userposts/${e._id}`}><button className="edit-post-button">View Post</button></Link>
                                </div>
                            )
                        })
                        : <h2>You have not created any posts</h2>
                }
            </div>
        </div>
    )
}

export default UserPosts;