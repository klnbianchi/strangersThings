<<<<<<< HEAD
import { async } from "q";
import { useState } from "react"
import { json } from "stream/consumers";

const EditPost = ({posts, setPosts, postId, setPostId}) => {
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState([null]);

    const handleDelete = async (postIdToDelete) => {
        console.log('postIdToDelete:', postIdToDelete);
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT
        ${postIdToDelete}`, {
            method: 'DELETE',
        
        });
        const data = await response.json();
        console.log('data: ', data);
        if(data){
            const newPosts = posts.filter(post => post.id !== postIdToDelete);
setPosts(newPosts);
        }

return <>
<h1>
    Edit a Post
</h1>
<form onSubmit={handleSubmit}>
    <input type="text" placeholder="title" value={title} onChange=
    {(ev) => setTitle(ev.target.value)}></input>
     <input type="text" placeholder="body" value={title} onChange=
    {(ev) => setBody(ev.target.value)}></input>
    <button type= "button" className ="btn-btn-outline-primary"
    onClick ={() => setPostId (post.id)}>Edit</button>
    <button type= "edit" className ="btn-btn-outline-danger"
    onClick ={() => HandleDelete (post.id)}>Delete</button>
</form>
</>
    }

}

=======
import React, { useEffect, useState } from 'react';
import { editPost } from '../api'
import { getToken } from '../auth'

const EditPost = ({ editPost, setEditPost }) => {
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    return (
        <>
            { editPost
                ? <div className="edit-post">
                    <h2>Edit Post </h2>
                    <form
                        className="create-post-form"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            const userToken = getToken();
                            try {
                                const results = await editPost(title, description, price, location, willDeliver, userToken);
                                setTitle('');
                                setDescription('');
                                setPrice('');
                                setLocation('');
                                willDeliver(false);

                            } catch (err) {
                                console.log(err)
                            } finally {

                            }
                        }}>

                        <input
                            type="text"
                            id="post-title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title" />

                        <textarea
                            // type="textarea"
                            id="post-description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                            rows={8} />
                        <input
                            type="text"
                            id="post-price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Price" />
                        <input
                            type="text"
                            id="post-location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Location" />

                        <label className="post-checkbox">
                            <input
                                type="checkbox"
                                id="post-deliver"
                                value={location}
                                onChange={(e) => setWillDeliver(true)}

                            />
                            <p>Willing to Deliver?</p>
                        </label>
                        <button>Edit Post</button>
                    </form>
                </div>
                : null
            }
        </>
    )
}

>>>>>>> 4d2990722191d3b8173c7f5b46a7ec9cc03c26d2
export default EditPost;