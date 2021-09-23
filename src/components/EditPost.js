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

export default EditPost;