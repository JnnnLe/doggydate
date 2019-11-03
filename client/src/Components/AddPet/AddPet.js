import React, { useState } from 'react'
import Axios from 'axios'

const AddPet = () => {
  const [petName, setPetName] = useState('')
  const [imgURL, setImgURL] = useState('')  
  const [breed, setBreed] = useState('')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [vaccinated, setVaccinated] = useState('')
  const [fixed, setFixed] = useState('')
  const [energyLevel, setEnergyLevel] = useState('')
  const [heatSensitivity, setHeatSensitivity] = useState('')
  const [waterCompatibility, setWaterCompatibility] = useState('')

  const handleSubmit = event => {
    console.log('Submitting pet!')
    Axios.post('http://localhost:3000/api/users/:id/pet', {pet: 'new'})
  }

  return (
    <div>
    <h1>Add your pet</h1>
    <input onChange={event => setPetName(event.target.value)} placeholder="Name" />
    <input onChange={event => setImgURL(event.target.value)} placeholder="Image Link" />
    <input onChange={event => setBreed(event.target.value)} placeholder="Breed" />
    <input onChange={event => setAge(event.target.value)} placeholder="Age" />
    <input onChange={event => setWeight(event.target.value)} placeholder="Weight" />
    <input onChange={event => setVaccinated(event.target.value)} placeholder="Vaccinated" />
    <input onChange={event => setFixed(event.target.value)} placeholder="Fixed" />
    <input onChange={event => setEnergyLevel(event.target.value)} placeholder="Energy Level" />
    <input onChange={event => setHeatSensitivity(event.target.value)} placeholder="Heat Sensitivity" />
    <input onChange={event => setWaterCompatibility(event.target.value)} placeholder="Water Compatibility" />
    </div>
  )
}

export default AddPet