import React from 'react'

import { Link } from 'react-router-dom'
import './SideBar.css'

import { useAuth0 } from '../../react-auth0-spa'
import { FaHeart } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

const SideBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, loading } = useAuth0()
  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && (
        <div>
          <nav className="menu" tabIndex="0">
            <div className="smartphone-menu-trigger"></div>
            <header className="avatar">
              <img src={user.picture} alt="Profile" />
              <h2>{user.name}</h2>
            </header>
            <ul>
              <li tabIndex="0" className="favorites"><Link to="/favorites"><span><FaHeart /></span></Link></li>
              <li tabIndex="0" className="home"><Link to="/"><span><TiHome /></span></Link></li>
              <li tabIndex="0" className="logout"><button onClick={() => logout()}>Log out</button></li>
            </ul>
          </nav>
        </div>
      )}

    </div>
  )
}

export default SideBar

// {isAuthenticated && ( ... remeber to encase the nav )}