import React from 'react'
import getData from './getData'

function App() {
  getData(1).then(data => console.log(data))
  return(
    <ul>
      Text
    </ul>
  )
}

export default App
