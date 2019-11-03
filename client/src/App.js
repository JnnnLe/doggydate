import React, { useState } from 'react'
import './App.css'
import SignUp from './Components/SignUp/SignUp'
import Login from './Components/Login/Login'
import Feed from './Views/Feed'
import AddPet from './Components/AddPet/AddPet'

// Todo: React router to link to Feed.js or any other views
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

function App() {
  const [ isAuthenicated, setAuthentication ] = useState(false)

  return (
    <Router>
        <div>
          <Switch>
              <Route exact path='/login' component={Login} />
              <Route path='/register' component={SignUp} />
              <Route path='/addpet' component={AddPet} />

          </Switch>
        </div>
      </Router>
  )
}

export default App
