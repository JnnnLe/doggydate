import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Components/Card/Card'
import './Feed.css'

const Feed = () => {
  const [ allPets, setAllPets ] = useState([]) 
  // must save the access_token and include in every header
  const [ accessToken, setAccessToken ] = useState('')

  const getAllPets = async () => {
    // get all pets from PetFinder API
    let allPets = await axios.get('http://localhost:3001/feed')
    .then((response) => {
      // place access token in header for every request made to the api
      console.log('**********************Inside of the Feed making an axios call to my express server', response.data.animals)
    })
  }  

  useEffect(() => {
    getAllPets()
  }, [setAllPets])

  // const renderPets = () => {
  //   return allPets.map(dog => <Card {...dog} /> )
  // }

  return (
    <div className="feed">
      <div className="nav"> 
        USER INFO
      </div>
      <div className="pets">
        HELLO WORLD!
      </div>
    </div>
  )
}

export default Feed