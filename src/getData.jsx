import axios from 'axios'

const getData = async (id) => {
  const resultUser = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  const resultPosts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  const user = resultUser.data
  const posts = resultPosts.data
  return {user, posts}
}

export default getData