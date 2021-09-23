import { async } from "q";
import { useState } from "react"
import { json } from "stream/consumers";

const Update = ({posts, setPosts, postId, setPostId}) => {
    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        console.log('title, body:', title, body);
        console.log('postId', postId);
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT
        ${postId}`, {
            method: 'PATCH',
            header:{
                'Content-type':'Application/json', 
            },
            body:JSON.stringify({

            })
    });
    const data = await response.json();
    console.log('data: ', data);
    if(data && data.title){
        const newPosts = posts.map(post => {
            if(post.id === postId){
                return data;
                } else {
                return post;
                }
            });
            setPosts(newPosts);
            setTitle('');
            setBody('');
            setPostId(null);
        }
    }

}

return <>
<h1>
    Update a Post
</h1>
<form onSubmit={handleSubmit}>
    <input type="text" placeholder="title" value={title} onChange=
    {(ev) => setTitle(ev.target.value)}></input>
     <input type="text" placeholder="body" value={title} onChange=
    {(ev) => setBody(ev.target.value)}></input>
    <button type= "submit" className ="btn-btn-outline-primary">Submit
    </button>
</form>
</>