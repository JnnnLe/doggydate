import React, { useState, useEffect } from 'react'
import axios from 'axios'

//TODO: this should all be related to the Pet schema and partial data used from User schema. Establish a route and React route it to my backend's API endpoint
function PetInfo () {
  const [state, setState] = useState({
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

  const [err, setError] = useState('')

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // send this info to endpoint, add http to prevent cross origin errors '/api/user' 
    let newUser = await axios.post('http://localhost:3000/api/user', state)

    if (newUser.data == 'Please include a username, email, password, and location') {
      //saved in state
      setError(newUser.data)
    } 

    // once successful redirect user to feed page
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Pet Name
          <input
            type="text"
            name="petName"
            value={state.petName}
            onChange={handleChange}
          />
        </label>
        <label>
          Photo
          <input
            type="text"
            name="photo"
            value={state.photo}
            onChange={handleChange}
          />
        </label>
        <label>
          Breed
          <input
            type="text"
            name="breed"
            value={state.breed}
            onChange={handleChange}
          />
        </label>
        <label>
          Age
          <input
            type="text"
            name="age"
            value={state.age}
            onChange={handleChange}
          />
        </label>
        <label>
          Age
          <input
            type="text"
            name="age"
            value={state.age}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
      {(err) ?
        <div>{err}</div> : null
      }
    </div>
  );
}

export default PetInfo