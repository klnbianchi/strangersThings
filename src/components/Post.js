import React, { useEffect, useState } from 'react';
import { fetchAllPosts } from '../api';

const Post = (props) => {
<<<<<<< HEAD
  const [posts, setPosts] = useState([]);
  console.log('posts:', posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await fetch ('https://jsonplace-univclone.herokuapp.com/posts');
      const data = await resp.json();
      console.log('data: ', data);
      setPosts(data);
    }

    fetchPosts();

  }, [])

  return (
    <div id="App">
      <h1>Stranger Things</h1>
      {
        posts.map(post => <div>key={post.id}
        {post.title}</div>)
      }
      <Header />
    </div>
  );
};
=======
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
>>>>>>> 0788d77ec339005fe60a19abe0e8abcc0ebf6745

export default Post;