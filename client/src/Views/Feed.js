import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Components/Card/Card'
import './Feed.css'

const Feed = () => {
  const [ allPets, setAllPets ] = useState([]) 

  const getAllPets = async () => {
    // get all pets from PetFinder API
    let allPets = await axios.get('http://localhost:3001/feed')
    .then((response) => {
      console.log('An example of what each pet object looks like:', response.data.animals[0] )
      setAllPets(response.data.animals)
    })
  }  

  useEffect(() => {
    getAllPets()
  }, [setAllPets])

  // const renderPets = () => {
  //   return allPets.map( dog => <Card {...dog} /> )
  // }

  return (
    <div className="feed">
      <div className="nav"> 
        USER INFO
      </div>
      <div className="pets">
        Hello
      </div>
    </div>
  )
}

export default Feed