import React, { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';
import { UserPosts } from './';
import { SingleMessage } from './'
import {EditPost} from './'



const SingleUserPostPage = ({ userPosts, userName, messages, editPost, setEditPost }) => {
    const { userPostId } = useParams();
    const highlightedPost = [userPosts.find(post => post._id === userPostId)];
   
useEffect(()=>{
console.log(messages, "!!!!")
},[])
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
            <UserPosts
                userPosts={highlightedPost}
                userName={userName}
                setEditPost={setEditPost} />
                <SingleMessage messages={messages} />
                <EditPost editPost={editPost} />

        </div>
      
    }
};
export default SingleUserPostPage;