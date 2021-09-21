import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = ({ allPosts }) => {
    return <div>{
        allPosts ?
            allPosts.map(e => {
                return (
                    <>
                   
                        { e.active
                            ?  <div
                            key={e._id}
                            className="user-posts">
                                <h3 className="post-title">{e.title} </h3>
                                <p className="post-description">{e.description}</p>
                                <p><span className="post-des-info">Price:</span> {e.price} </p>
                                <p><span className="post-des-info">Seller:</span> {e.author.username ? e.author.username : null} </p>
                                <p><span className="post-des-info">Location:</span> {e.location} </p>
                                <p><span className="post-des-info">Willing to Deliver?:</span> {e.willDeliver ? "Yes" : "No"} </p>
                                <Link
                                    className="post-link"
                                    to={`/posts/${e._id}`}><button className="edit-post-button">View Post</button></Link>
                            </div>
                            : null
                        }
                    </>
                )
            })
            : null
    }

    </div>
}

export default SinglePost;