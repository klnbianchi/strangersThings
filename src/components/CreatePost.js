import { storeOptionsAsProperties } from 'commander';
import { async } from 'q';
import React from 'react';
import { useState } from 'react/cjs/react.development';

const CreatePost = (props) => {
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log('title, description', title, body);
    const response = await fetch ('https://jsonplace-univclone.herokuapp.com/posts', {
      method: 'POST', 
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify({
        title,
        body,

      })
    });
    const data = await response.json();
    console.log('data', data);
    setPosts([data, ...posts]);
    setTitle('');
    setBody('');
  }

  return (
    <div>
      <h1>Create Post</h1>

    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="title" value={title} onChange=
      {(ev) => setTitle(ev.target.value)}></input>

<input type="text" placeholder="body" value={description} onChange=
      {(ev) => setBody(ev.target.value)}></input>
    </form>
    </div>
  )
}

export default CreatePost;