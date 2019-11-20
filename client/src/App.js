import React from 'react'
import './App.css'
import Login from './Components/Login/Login'
import Feed from './Components/Feed/Feed'
import Favorites from './Components/Favorites/Favorites'

import PrivateRoute from './Components/PrivateRoute'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {

  return (
    <div className='App'>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute path='/feed' component={Feed} />
            <PrivateRoute path='/favorites' component={Favorites} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
