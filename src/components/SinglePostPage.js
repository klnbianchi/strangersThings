import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SinglePost } from './';
import SendMessage from './SendMessage';
import {getToken} from '../auth'


const SinglePostPage = ({ allPosts, userId, isLoggedIn }) => {
    const { postId } = useParams();
    const highlightedPost = [allPosts.find(post => post._id === postId)]
    
    const auth = getToken();
    const author=highlightedPost[0].author._id

    const myPost = allPosts.find((post) => {
        if (post._id === postId) {
            return true;
        } else {
            false;
        }
    });

    if (!myPost) {
        return (
            <div className="post-card">
                <h3> the post with id {postId} was not found</h3>
            </div>
        );
    } else {

        return <div>
            <SinglePost allPosts={highlightedPost} />
            {auth ?
                <>
                    {
                        author !== userId
                            ? <SendMessage userName={highlightedPost[0].author.username} />
                            : null
                    }
                </>

                : null


            }
        </div>
    }


};

export default SinglePostPage;