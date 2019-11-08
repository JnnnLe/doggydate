import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Components/Card/Card'
import './Feed.css'


const Feed = () => {
  const [ allPets, setAllPets ] = useState([]) 

  const getAllPets = async () => {
    let pets = await axios.get('http://localhost:3001/api/user/pet')
    
    return pets.data === 'You have no pets.' ? pets.data :
    setAllPets(pets.data)
  }  

  useEffect(() => {
    getAllPets()
  }, [setAllPets])

  const renderPets = () => {
    return allPets.map(dog => <Card {...dog} /> )
  }

  return (
    <div className="feed">
      <div className="nav"> 
        Nav bar to be here
      </div>
      <div className="pets">
        {renderPets()}
      </div>
    </div>
  )
}

export default Feed