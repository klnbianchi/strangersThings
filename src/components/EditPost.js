import React, { useEffect, useState } from 'react';
import { editPost } from '../api'
import { getToken } from '../auth'

const EditPost = ({ userPosts, setUserPosts, userPostId, highlightedPost }) => {
    const [title, setTitle] = useState(highlightedPost[0].title);
    const [location, setLocation] = useState(highlightedPost[0].location);
    const [price, setPrice] = useState(highlightedPost[0].price);
    const [description, setDescription] = useState(highlightedPost[0].description);
    const [willDeliver, setWillDeliver] = useState(highlightedPost[0].willDeliver);
    const editPostId = highlightedPost[0]._id;

    return (
        <div className="edit-post">
            <h2>Edit Post </h2>
            <form
                className="create-post-form"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const userToken = getToken();
                    try {
                        const results = await editPost(title, description, price, location, willDeliver, userToken, userPostId);
                        const filteredPosts = userPosts.filter(post => {
                            if (post._id !== editPostId) {
                                return post
                            }
                        });
                        const userPostsCopy = filteredPosts.slice();
                        userPostsCopy.unshift(results.data.post)
                        setUserPosts(userPostsCopy)
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
                        value={willDeliver}
                        checked={willDeliver}
                        onChange={(e) => {
                            !willDeliver ? setWillDeliver(true) : setWillDeliver(false);
                        }}

                    />
                    <p>Willing to Deliver?</p>
                </label>
                <button>Edit Post</button>
            </form>
        </div>
    )
}

export default EditPost;


