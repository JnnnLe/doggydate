import React, { useState } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import { FormLabel } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const AddPet = () => {
  const [ petName, setPetName ] = useState('')
  const [ imgURL, setImgURL ] = useState('')  
  const [ breed, setBreed ] = useState('')
  const [ age, setAge ] = useState('')
  const [ weight, setWeight ] = useState('')
  const [ vaccinated, setVaccinated ] = useState('')
  const [ fixed, setFixed ] = useState('')
  const [ energyLevel, setEnergyLevel ] = useState('')
  const [ heatSensitivity, setHeatSensitivity ] = useState('')
  const [ waterCompatibility, setWaterCompatibility ] = useState('')
  const [ selectedValue, setSelectedValue ] = React.useState('a');

  const handleSubmit = async event => {
    let newPet = axios.post('http://localhost:3000/api/user/pet', {
      petName,
      imgURL,
      breed,
      age,
      weight,
      vaccinated,
      fixed,
      energyLevel,
      heatSensitivity,
      waterCompatibility
    })
    .then(res => {
      window.location.href = "http://localhost:3001/feed";

    })
  }

  return (
    <div className="addPet">
      <h1>Add your pet</h1>
      <TextField onChange={event => setPetName(event.target.value)} label="Name" /> 
      <br />
      <TextField onChange={event => setImgURL(event.target.value)} label="Image Link" /> 
      <br />
      <TextField onChange={event => setBreed(event.target.value)} label="Breed" /> 
      <br />
      <TextField onChange={event => setAge(event.target.value)} label="Age" /> 
      <br />
      <TextField onChange={event => setWeight(event.target.value)} label="Weight" /> 
      <br />
      <FormLabel>Vaccinated:</FormLabel>
      <RadioGroup aria-label="Vaccinated" name="Vaccinated"  onChange={event => setVaccinated(event.target.value)}>
      <FormControlLabel
        value="true"
        control={<Radio color="primary" />}
        label="Yes"
        labelPlacement="end"
      />
      <FormControlLabel
      value="false"
      control={<Radio color="primary" />}
      label="No"
      labelPlacement="end"
      />
      </RadioGroup>
      <br />
      <FormLabel>Fixed:</FormLabel>
      <RadioGroup aria-label="Fixed" name="Fixed"  onChange={event => setFixed(event.target.value)}>
      <FormControlLabel
        value="true"
        control={<Radio color="primary" />}
        label="Yes"
        labelPlacement="end"
      />
      <FormControlLabel
      value="false"
      control={<Radio color="primary" />}
      label="No"
      labelPlacement="end"
      />
      </RadioGroup>
      <br />

      <FormLabel>Energy Level:</FormLabel>
      <RadioGroup aria-label="Energy Level" name="Energy Level"  onChange={event => setEnergyLevel(event.target.value)}>
      <FormControlLabel
        value="Mellow"
        control={<Radio color="primary" />}
        label="Mellow"
        labelPlacement="end"
      />
      <FormControlLabel
        value="Likes to play"
        control={<Radio color="primary" />}
        label="Likes to play"
        labelPlacement="end"
      />
      <FormControlLabel
        value="Active"
        control={<Radio color="primary" />}
        label="Active"
        labelPlacement="end"
      />
      <FormControlLabel
        value="Hyper Active"
        control={<Radio color="primary" />}
        label="Hyper Active"
        labelPlacement="end"
      />
      </RadioGroup>
 
      <br />
      <FormLabel>Heat Sensitive:</FormLabel>
      <RadioGroup aria-label="Heat Sensitive" name="Heat Sensitive"  onChange={event => setHeatSensitivity(event.target.value)}>
      <FormControlLabel
        value="true"
        control={<Radio color="primary" />}
        label="Yes"
        labelPlacement="end"
      />
      <FormControlLabel
      value="false"
      control={<Radio color="primary" />}
      label="No"
      labelPlacement="end"
      />
      </RadioGroup>
      <br />
      <FormLabel>Water Compatible:</FormLabel>
      <RadioGroup aria-label="Water Compatible" name="Water Compatible"  onChange={event => setWaterCompatibility(event.target.value)}>
      <FormControlLabel
        value="true"
        control={<Radio color="primary" />}
        label="Yes"
        labelPlacement="end"
      />
      <FormControlLabel
      value="false"
      control={<Radio color="primary" />}
      label="No"
      labelPlacement="end"
      />
      </RadioGroup>
      <br />
      <Button
      variant="contained"
      className="Add Pet"
      onClick={handleSubmit}>Add Pet
      </Button>
    </div>
  )
}

export default AddPet