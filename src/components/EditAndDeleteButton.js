import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { deletePost } from '../api';
import { getToken } from '../auth'



const EditAndDeleteButton=(userPosts, setEditPost)=>{
    const { userPostId } = useParams();
    const history = useHistory();

    const handleClick = () => {
        history.push('/profile/userposts');
    };
console.log(setEditPost)
    // const activePosts=userPosts.filter

    return(
        <>
        <button
            className="edit-post-button"
            onClick={() =>setEditPost(true)}>
            Edit Post
    </button>
        <button
            className="delete-post-button"
            onClick={async () => {
                try {
                    const userToken = getToken();
                    const post_ID = userPostId;
                    const emptyPostObj = await deletePost(userToken, post_ID);
                    handleClick();
                } catch (err) {
                    console.log(err)
                }
            }}>
            Delete Post
    </button>
    </>
    )
}

export default EditAndDeleteButton;