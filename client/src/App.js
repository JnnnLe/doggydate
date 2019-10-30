import React from 'react'
import AccountInfo from './Components/AccountInfo'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Welcome to doggydate 
        <span role="img" aria-label="emoji"> 🐶</span>
      </h1>
      <AccountInfo />
    </div>
  )
}

export default App
