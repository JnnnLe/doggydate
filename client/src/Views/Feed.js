import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Card from '../Components/Card/Card'


function Feed () {
  return (
    <div>
      <h1>Welcome to the Feed!</h1>
      <Card />
    </div>
  )
}

export default Feed