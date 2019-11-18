import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Components/Card/Card'
import './Feed.css'
import config from '../auth_config'

const Feed = () => {
  
  let dirtyZipCode = ''
  const location = navigator.geolocation.getCurrentPosition( async position => {
    let lat = position.coords.latitude
    let long = position.coords.longitude
    dirtyZipCode = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${config.googleApi}`)
    const address = dirtyZipCode.data.results[0].formatted_address
    cleanZipCode(address)
  })

  const cleanZipCode = address => {
    let zipCode = address.split(', ')
    zipCode = zipCode[2].split(' ')
    zipCode = zipCode[1]
    setZipCode(zipCode)
  } 

  const [ zipCode, setZipCode ] = useState()
  const [ localPets, setLocalPets ] = useState([]) 

  const getLocalPets = async () => {
    // get first 20 pets with local zip code from PetFinder API
    // server endpoint
    await axios.get('/feed', {
      zipCode: zipCode
    })
    .then((response) => {
      setLocalPets(response.data)
    })
    .catch(err => console.log('Error in GetLocalPets:', err))
  }  

  useEffect(() => {
    getLocalPets()
  }, [setLocalPets])

  const cleanPets = localPets.filter(dog => dog.photos.length > 0)

  const renderPets = () => {
    return cleanPets.map(dog => <Card key={dog.id} {...dog} />)
  }

  return (
    <div className="feed">
      <div className="nav"> 
        USER INFO
      </div>
      <div className="pets">
      {renderPets()}
      </div>
    </div>
  )
}

export default Feed