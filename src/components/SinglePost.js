import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SinglePost = ({ allPosts }) => {
    const { postId } = useParams();

    return <div>{
        allPosts ?
            allPosts.map(e => {
                return (
                    <div key={e._id}>

                        { e.active
                            ? <div
                                className="user-posts">
                                <h3 className="post-title">{e.title} </h3>
                                <p className="post-description">{e.description}</p>
                                <p><span className="post-des-info">Price:</span> {e.price} </p>
                                <p><span className="post-des-info">Seller:</span> {e.author.username ? e.author.username : null} </p>
                                <p><span className="post-des-info">Location:</span> {e.location} </p>
                                <p><span className="post-des-info">Willing to Deliver?:</span> {e.willDeliver ? "Yes" : "No"} </p>
                                { e._id !== postId
                                   ? <Link
                                        className="post-link"
                                        to={`/posts/${e._id}`}><button className="edit-post-button">View Post</button></Link>
                                        : <Link
                                        className="post-link"
                                        to={`/posts`}><button className="post-go-back">Back to Posts</button></Link>
                                }

                            </div>
                            : null
                        }
                    </div>
                )
            })
            : null
    }

    </div>
}

export default SinglePost;