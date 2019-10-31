import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/core";
import { Formik, Form, Field } from 'formik';

function Signup () {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
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
        <input type="submit" value="Sign Up"/>
      </form>
      {(err) ?
        <div>{err}</div> : null
      }
    </div>
  );
}

export default Signup