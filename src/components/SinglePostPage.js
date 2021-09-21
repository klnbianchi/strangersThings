import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { SinglePost } from './';
import SendMessage from './SendMessage';


const SinglePostPage = ({ allPosts}) => {
    const { postId } = useParams();
    const highlightedPost =[allPosts.find(post => post._id === postId)] 

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
    }else{
        
return <div>
    <SinglePost allPosts={highlightedPost} />
   
    <SendMessage userName={highlightedPost[0].author.username} />
</div>
    }

    
};

export default SinglePostPage;