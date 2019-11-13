import React, { useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom'
import './Login.css'
import Button from '@material-ui/core/Button'
import { useAuth0 } from "../../react-auth0-spa";
import Feed from '../../Views/Feed'

const Login = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  
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

      </div>
    </div>
  )
}

export default Login