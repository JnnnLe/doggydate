import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AccountInfo = ()=> {
  const [state, setState] = React.useState({
    username: '',
    email: '',
    password: '',
    location: ''
    // petName: '',
    // petImg: '',
    // breed: '',
    // age: '',
    // weight: '',
    // fixed: '',
    // vaccinated: '',
    // energyLevel: '',
    // heatSensitivity: '',
    // waterCompatibility: '',
    // Availability: ''
  })

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // send this info to endpoint, add http: '/api/user' 
    let newUser = await axios.post('http://localhost:3000/api/user', state)
    console.log(newUser)

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          type="text"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
      </label>
      <label>
        Location
        <input
          type="text"
          name="location"
          value={state.location}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default AccountInfo