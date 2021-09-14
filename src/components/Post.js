import React, { useEffect, useState } from 'react';
import { fetchAllPosts } from '../api';

const Post = (props) => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(async () => {
        const posts = await fetchAllPosts();
        setAllPosts(posts)
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {
                allPosts.length
                    ? allPosts.map(e => {
                        return (
                            <div key={e._id}>
                                <h3>{e.title}</h3>
                                <p>{e.description}</p>
                            </div>
                        )
                    })
                    : null
            }
        </div>
    )
}

export default Post;