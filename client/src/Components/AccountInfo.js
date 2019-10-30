import React from 'react'

class AccountInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Jennifer',
      email: '',
      password: '',
      location: '',
      petName: '',
      petImg: '',
      breed: '',
      age: '',
      weight: '',
      fixed: '',
      vaccinated: '',
      energyLevel: '',
      heatSensitivity: '',
      waterCompatibility: '',
      Availability: ''
    }
  }

  render() {
    return (
      <div>
        <h3>Hello Jennifer</h3>
      </div>
    )
  }
}

export default AccountInfo