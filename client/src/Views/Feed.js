import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Components/Card/Card'
import './Feed.css'

const clientId = 'W6NAayOExWll5zlyRBfUxraLLqw1trndTr3m27Q1gt9jPC39g7'
const clientSecret = 'IKRSvFeNbgG9c4kr1nepwwN3mnl2p71TTbtOKHyX'
const token = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`

// let tok = 'grant_type=client_credentials&client_id=W6NAayOExWll5zlyRBfUxraLLqw1trndTr3m27Q1gt9jPC39g7&client_secret=IKRSvFeNbgG9c4kr1nepwwN3mnl2p71TTbtOKHyX'

const url = `https://api.petfinder.com/v2/oauth2/${token}`


const Feed = () => {
  const [ allPets, setAllPets ] = useState([]) 
  // must save the access_token and include in every header
  const [ accessToken, setAccessToken ] = useState('')

  const getAllPets = async () => {
    // get all pets from PetFinder API
    let allPets = axios.get('/feed')
    .then((response) => {
      // place access token in header for every request made to the api
      console.log('**********************Inside of the Feed making an axios call to api', response);
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