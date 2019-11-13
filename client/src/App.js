import React from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth0 } from './react-auth0-spa'
import './App.css'
import Login from './Components/Login/Login'
import Feed from './Views/Feed'
import NavBar from './Components/NavBar'
import PrivateRoute from './Components/PrivateRoute'

// Todo: React router to link to Feed.js or any other views
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const App = () => {

  return (
    <div className='App'>

      <Router>
        <NavBar />
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
