import React, { useEffect, useState } from 'react';
import { editPost } from '../api'
import { getToken } from '../auth'

const EditPost = ({ userPosts, setUserPosts }) => {
    const [title, setTitle] = useState(userPosts[0].title);
    const [location, setLocation] = useState(userPosts[0].location);
    const [price, setPrice] = useState(userPosts[0].price);
    const [description, setDescription] = useState(userPosts[0].description);
    const [willDeliver, setWillDeliver] = useState(userPosts[0].willDeliver);

    return (
        <div className="edit-post">
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

                        const userPostsCopy = userPosts.slice();
                        userPostsCopy.push(results.data.post)
                        setAllPosts(userPostsCopy)

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
                        value={location}
                        onChange={(e) => setWillDeliver(true)}

                    />
                    <p>Willing to Deliver?</p>
                </label>
                <button>Edit Post</button>
            </form>
        </div>
    )
}

export default EditPost;