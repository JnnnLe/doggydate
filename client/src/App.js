import React, { useState } from 'react'
import './App.css'
import SignUp from './Components/SignUp/SignUp'
import Feed from './Views/Feed'

// Todo: React router to link to Feed.js or any other views
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

function App() {
  const [ isAuthenicated, setAuthentication ] = useState(false)

  return (
    <div className="App">
      <h1>doggydate 
        <span role="img" aria-label="emoji"> 🐶</span>
      </h1>
      { !isAuthenicated ? <SignUp /> : <Feed /> }
    </div>
  )
}

export default App
