import React from 'react'
import axios from 'axios'


const getData = async (id) => {
  const resultUser = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  const resultPosts = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  const user = resultUser.data
  const posts = resultPosts.data
  return {user, posts}
}

function App() {
  getData(1).then(data => console.log(data))
  return(
    <ul>
      Text
    </ul>
  )
}

export default App
