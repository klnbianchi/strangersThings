import React, { useState, useEffect } from 'react';
import { useParams, Link, Route, Switch } from 'react-router-dom';
import { UserPosts } from './';
import { SingleMessage } from './'
import { EditPost } from './'
import { getToken } from '../auth'

const SingleUserPostPage = ({ userPosts, userName, messages, setUserPosts }) => {
    const { userPostId } = useParams();
    const highlightedPost = [userPosts.find(post => post._id === userPostId)];
    const auth = getToken();

    const postMessages = messages.filter(e => {
        if (e.post._id && e.post._id === userPostId) {
            return e
        }
    });

    const myPost = userPosts.find((post) => {
        if (post._id === userPostId) {
            return true;
        } else {
            false;
        }
    });

    if (!myPost) {
        return (
            <div className="post-error">
                <h3> the post with id {userPostId} was not found</h3>
            </div>
        );
    } else {

        return <div className="single-user-post">
             
            {auth
                ? <>
                <Link to="/profile/userposts/edit">Edit Post</Link>
                    <div className="single-post">
                   
                        <UserPosts
                            userPosts={highlightedPost}
                            userName={userName}
                            setUserPosts={setUserPosts} />
                           
                    </div>
                    {/* <div className="edit-post-comp">
                    <EditPost 
                    userPosts={highlightedPost}
                    setUserPosts={setUserPosts} />
                    </div> */}
                    <div className="user-messages">
                        <h3>Messages</h3>
                        <SingleMessage messages={postMessages} />
                    </div>

                </>
                : null
            }
        </div>
    }
};
export default SingleUserPostPage;

