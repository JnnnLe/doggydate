import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './SignUp.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Signup = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ err, setError ] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    let newUser = await axios.post('http://localhost:3001/api/auth/register', {
      email,
      password
    })

    // console.log('New user added:', newUser)
    
    if (newUser.data == 'Email is already taken.') {
      setError('Email is already taken.')
      return new Error(400)
    }

    // once successful redirect user to login page
    return window.location.href = "http://localhost:3000/login"

  }
 
  return (
    <div className="signUp">
      <div className="signUpLeft">
        <h1 className="signUpHeader">Register</h1>
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
          className="signUpButton"
          onClick={handleSubmit}>
          Create Account
        </Button>
        
        {err ? <div>{err}</div> : null}
      </div>
      <div className="signUpRight" />
    </div>
  )
}

export default Signup