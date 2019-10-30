import React from 'react'

function AccountInfo () {
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

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  return (
    <form>
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
    </form>
  );
}

export default AccountInfo