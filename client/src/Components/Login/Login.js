import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Login.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ err, setError ] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    // send this info to endpoint, add http to prevent cross origin errors '/api/user'
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
        <h1 className="loginHeader">Login</h1>
        <TextField
          id="standard-basic"
          label="Email"
          margin="normal"
          onChange={event => setEmail(event.target.value)}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Password"
          type="password"
          margin="normal"
          onChange={event => setPassword(event.target.value)}
        />
        <br />
        <br />
        <Button
          variant="contained"
          className="loginButton"
          onClick={handleSubmit}>
          Login
        </Button>
        <br />
        <br />
        <Button
          variant="contained"
          className="loginButton"
          // onClick={handleSubmit}
          href='/register'
          >
          Don't have an account?
        </Button>
        
        {err ? <div>{err}</div> : null}
      </div>
    </div>
  )
}

export default Login