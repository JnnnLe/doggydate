import React, { useState } from 'react'
import './App.css'
import SignUp from './Components/SignUp/SignUp'
import Login from './Components/Login/Login'
import Feed from './Views/Feed'
import AddPet from './Components/AddPet/AddPet'
import NavBar from './Components/NavBar'
import { useAuth0 } from './react-auth0-spa'
import Profile from './Components/Profile'
import PrivateRoute from './Components/PrivateRoute'

// Todo: React router to link to Feed.js or any other views
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

const App = () => {

  return (
    <div className="App">

    <Router>
      <header>
        <NavBar />
      </header>
      <div>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={SignUp} />
          <Route path='/addpet' component={AddPet} />
          <Route path='/feed' component={Feed} />

          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>

    </div>
  )
}

export default App
