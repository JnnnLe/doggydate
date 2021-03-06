import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useAuth0 } from '../react-auth0-spa'
import axios from 'axios'

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect, user, getTokenSilently } = useAuth0()

  useEffect(() => {
    if (isAuthenticated && user) {
      registerUser(user, getTokenSilently)
    }

    if (loading || isAuthenticated) {
      return
    }

    const fn = async () => {
      await loginWithRedirect({
        appState: { targetUrl: path }
      })
    }

    fn()

  }, [loading, isAuthenticated, loginWithRedirect, getTokenSilently, user, path])

  const render = props => isAuthenticated === true ? <Component {...props} /> : null

  return <Route path={path} render={render} {...rest} />
}
 
// Check authorization of user at each private route, if the user is new then register else, authprize them for navigation
const registerUser = async (user, fn) => {
  try {
    const token = await fn();
    await axios.post('/api/user',
      {
        email: user.email,
        name: user.name
      },
      {
        'headers': {
          Authorization: `Bearer ${token}`
        }
    })
  
  } catch (error) {
    console.error(error)
  }
} 

export default PrivateRoute