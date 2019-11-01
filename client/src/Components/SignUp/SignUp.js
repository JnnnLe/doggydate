import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Signup () {
  const [ email, setEmail ] = useState('')   
  const [ password, setPassword ] = useState('') 
  const [ err, setError ] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    // send this info to endpoint, add http to prevent cross origin errors '/api/user' 

    let newUser = await axios.post('http://localhost:3000/api/user', { email, password })
    if (newUser.data = 'Email is already taken.') {
      setError(newUser.data)
    }
   

    // once successful redirect user to feed page
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            label="Email"
            type="text"
            name="email"
            value={email}
            onChange={ (event) => { setEmail(event.target.value)} }
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={password}
            onChange={ (event) => { setPassword(event.target.value)} }
          />
        </label>
          <input type="submit" value="Sign Up"/>
      </form>
      {(err) ?
        <div>{err}</div> : null
      }
    </div>
  );
}

export default Signup