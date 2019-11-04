import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Card from '../Components/Card/Card'

const Feed = () => {
  const [ allPets, setAllPets ] = useState([]) 

  useEffect(() => {
    const getAllPets = async () => {
      let pets = await axios.get('http://localhost:3000/api/user/pet')

      if (pets.data == 'You have no pets.') {
        return pets.data
      }
      setAllPets(pets.data)
    }   
    getAllPets()
  })

  const renderPets = () => {
    return allPets.map(dog => <Card {...dog} /> )
  }

  return (
    <div>
      <h1>Welcome to the Feed!</h1>
      {renderPets()}
    </div>
  )
}

export default Feed