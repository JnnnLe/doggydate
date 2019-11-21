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
          <main className="main">
          <aside className="sidebar">
          <header className="avatar">
            <img src={user.picture} alt="Profile" />
          </header>
          <nav className="nav">
            <ul>
              <li className="active"><a href="#">Welcome {user.name}</a></li>
              <li className="favorites"><a href="/favorites"> Favorites <FaHeart />  </a></li>
              <li className="home"><a href="/feed"> Home <TiHome /> </a></li>
              <li className="logout"><button onClick={() => logout()}>Logout</button></li>
            </ul>
          </nav>
          </aside>


          </main>
        </div>
      )}

    </div>
  )
}

export default SideBar
