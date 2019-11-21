import React from 'react'

import { Link } from 'react-router-dom'

import { useAuth0 } from '../react-auth0-spa'
import { FaHeart } from "react-icons/fa";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, loading } = useAuth0()
  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}
      
      <img src={user.picture} alt="Profile" />
      <h2>{user.name}</h2>
      
      <Link to="/feed"> Home </Link>
      <br/>
      <Link to="/favorites"> FAVORITES <FaHeart /></Link>
      <br/>
      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

    </div>
  )
}

export default NavBar