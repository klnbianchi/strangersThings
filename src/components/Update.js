import { async } from "q";
import { useState } from "react"

const Update = ({posts, setPosts, postId, setPostId}) => {
    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        console.log('title, body:', title, body);
        console.log('postId', postId);
    }
}

return <>
<h1>
    Update a Post
</h1>
<form onSubmit={handleSubmit}>
    <input type="text" placeholder="title" value={title} onChange=
    {(ev) => setTitle(ev.target.value)}></input>

</form>