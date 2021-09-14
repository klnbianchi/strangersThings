import axios from 'axios';

const BASE = 'https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT/'

export async function getAllPosts() {
  try {
    const { data } = await axios.get(`${ BASE }/posts`);
    return data;
  } catch (error) {
    throw error;
  }
}

