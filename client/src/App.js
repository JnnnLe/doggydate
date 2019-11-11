import React from 'react'
import './App.css'
// import SignUp from './Components/SignUp/SignUp'
import Login from './Components/Login/Login'
import Feed from './Views/Feed'
import AddPet from './Components/AddPet/AddPet'
import NavBar from './Components/NavBar'
import { useAuth0 } from './react-auth0-spa'
import Profile from './Components/Profile'
import PrivateRoute from './Components/PrivateRoute'
import ExternalApi from "./Views/ExternalAPI";

// Todo: React router to link to Feed.js or any other views
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

const App = () => {

  return (
    <div className="App">

      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={Login}/>
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/external-api" component={ExternalApi} />

            <Route path='/addPet' component={AddPet} />
            <Route path='/feed' component={Feed} />
          </Switch>
        </div>
      </Router>

    </div>
  )
}

export default App
