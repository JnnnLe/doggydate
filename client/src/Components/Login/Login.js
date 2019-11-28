import React from 'react'
import { Redirect } from 'react-router-dom'
import './Login.css'
import Button from '@material-ui/core/Button'
import { useAuth0 } from "../../react-auth0-spa"

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  
  return (
    <div>
      {isAuthenticated ? 
        <Redirect from='/' to='/feed' /> : 
          <div className="login">
          <div className="loginLeft" />
          <div className="loginRight">
            <h1 className="loginHeader">Welcome to doggydate</h1>
            <br />   
            <Button
              variant="contained"
              className="loginButton"
              onClick={() => loginWithRedirect({})} 
            >
              Let's begin
            </Button>
          </div>
        </div>}
      </div>
  )
}

export default Login