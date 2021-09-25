import React from 'react';
import { useParams } from 'react-router-dom';
import { SinglePost } from './';
import SendMessage from './SendMessage';
import { getToken } from '../auth'

const SinglePostPage = ({ allPosts, userId, setMessages, messages }) => {
    const { postId } = useParams();

    const highlightedPost = [allPosts.find((post) => {
        if (post._id === postId) {
            return true
        } else {
            false
        }
    })];

    const auth = getToken();

    const myPost = allPosts.find((post) => {
        if (post.active && post._id === postId) {
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
                        myPost.author._id !== userId
                            ? <SendMessage
                                userName={highlightedPost[0].author.username}
                                setMessages={setMessages}
                                messages={messages} />
                            : null
                    }
                </>

                : null
            }
        </div>
    }


};

export default SinglePostPage;