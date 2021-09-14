import React from 'react';

const Post = (props) => {
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

export default Post;