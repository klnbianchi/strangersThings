import axios from 'axios';

const BASE = 'https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT'

export async function fetchAllPosts() {
  try {
    const { data: { data } } = await axios.get(`${BASE}/posts`);
    return data.posts
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`,
      {
        user: {
          username: username,
          password: password,
        }
      });
    return data
  } catch (error) {
    throw error;
  }
}


export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`,
      {
        user: {
          username: username,
          password: password,
        }
      });
    return data
  } catch (error) {
    throw error;
  }
}

export async function createPost(title, description, price, location, willDeliver, token) {
  try {
    const { data } = await axios.post(`${BASE}/posts`,
      {
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: willDeliver,
        }
      }, { headers: { Authorization: `Bearer ${token}` } });
    return data
  } catch (error) {
    throw error;
  }
}

export async function fetchUserData(token) {
  try {
    const { data: { data } } = await axios.get(`${BASE}/users/me`,
      { headers: { Authorization: `Bearer ${token}` } });
    return data
  } catch (error) {
    throw error;
  }
}

export async function editPost(title, description, price, location, willDeliver, token, postId) {
  try {
    const { data } = await axios.patch(`${BASE}/posts${postId}`,
      {
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: willDeliver,
        }
      }, { headers: { Authorization: `Bearer ${token}` } });
    console.log(data)
    return data
  } catch (error) {
    throw error;
  }
}

export async function deletePost(token, postId) {
  try {
    const { data } = await axios.delete(`${BASE}/posts/${postId}`,
      { headers: { Authorization: `Bearer ${token}` } });
    return data
  } catch (error) {
    throw error;
  }
}

export async function sendMessage(postId,content, token) {
  try {
    const { data } = await axios.post(`${BASE}/posts/${postId}/messages`,
      {
        message: {
         content: content
        }
      }, { headers: { Authorization: `Bearer ${token}` } });
    return data
  } catch (error) {
    throw error;
  }
}

