import React from 'react'
import './App.css'
import Login from './Components/Login/Login'
import Feed from './Views/Feed'

import PrivateRoute from './Components/PrivateRoute'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {

  return (
    <div className='App'>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Login}/>
            <PrivateRoute path='/feed' component={Feed} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
