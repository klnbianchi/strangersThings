
import React, { useState } from 'react';
import { createPost } from '../api'
import {getToken} from '../auth'

const CreatePost = (props) => {
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
   
    return (
        <div className="create-post">
            <h2>Add a New Listing </h2>
            <form
                className="create-post-form"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const userToken=getToken();
                    try {
                        const results = await createPost(title, description, price, location, willDeliver, userToken)
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
                <button>Create Post</button>
            </form>
        </div>
    )
