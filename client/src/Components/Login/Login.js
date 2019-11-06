import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Login.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useAuth0 } from "../../react-auth0-spa";

const Login = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  // const [ err, setError ] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    // send this info to endpoint, add http to prevent cross origin errors '/api/user'
    // diff for dev and prod mode
    let newUser = await axios.post('http://localhost:3000/api/auth/login', {
      email,
      password
    })

    // console.log(newUser)
    
    if (newUser.data == 'Invalid credentials!') {
      return new Error(400)
    }
    // once successful redirect user to feed page
    return window.location.href = "http://localhost:3001/feed"
  }
  
  return (
    <div className="login">
      <div className="loginLeft" />
      <div className="loginRight">
        <h1 className="loginHeader">Welcome to doggydate</h1>
        <br />
        {!isAuthenticated && (
          <Button
          variant="contained"
          className="loginButton"
          onClick={() =>
            loginWithRedirect({})
            }
          >
            Let's begin
          </Button>
        )}
          
        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

        {isAuthenticated && (
          <Router>
            <Link path="/feed">Feed</Link>
            <Link path="/profile">Profile</Link>
          </Router>
        )}
      </div>
    </div>
  )
}

export default Login