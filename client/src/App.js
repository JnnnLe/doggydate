import React from 'react'
import './App.css'
import SignUp from './Components/SignUp/SignUp'

// Todo: React router to link to Feed.js or any other views
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>doggydate 
        <span role="img" aria-label="emoji"> 🐶</span>
      </h1>

      <SignUp />
    </div>
  )
}

export default App
