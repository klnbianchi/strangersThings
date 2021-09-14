import axios from 'axios';

const BASE = 'https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT/'

export async function fetchAllPosts() {
  try {
    const {data:{data}} = await axios.get(`${ BASE }/posts`);
    return data.posts
  } catch (error) {
    throw error;
  }
}

