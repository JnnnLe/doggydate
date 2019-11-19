import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Components/Card/Card'
import NavBar from '../Components/NavBar'
import './Feed.css'
import config from '../auth_config'

const Feed = () => {
  const [ zipCode, setZipCode ] = useState('')
  const [ pets, setPets ] = useState([]) 

  const getPets = async () => {
    // get first 20 pets with local zip code from PetFinder API
    await axios.get('/feed')
    .then((response) => {
      setPets(response.data)
    })
    .catch(err => console.log('Error in getPets:', err))
  }  

  const getZip = async (e) => {
    // get first 20 pets with local zip code from PetFinder API
    e.preventDefault()
    await axios.post('/feed/zipCode', {
      zip: zipCode
    })
    .then((response) => {
      setPets(response.data)
      // console.log('FE:', response)
    })
    .catch(err => console.log('Error in getZip:', err))
  }  

  useEffect(() => {
    getPets()
  }, [setPets])

  const cleanPets = pets.filter(dog => dog.photos.length > 0 && dog.species == 'Dog')

  const renderPets = () => {
    return cleanPets.map(dog => <Card key={dog.id} {...dog} />)
  }

  return (
    <div className="feed">
      <NavBar />
        <form onSubmit={getZip}>
          <input className="search" type="text" placeholder="Your newest family member awaits" 
            value={zipCode}
            onChange={e => setZipCode(e.target.value)}/>
        </form>
      <div className="pets">
        {renderPets()}
      </div>
    </div>
  )
}

export default Feed

  // let dirtyZipCode = ''
  // const location = navigator.geolocation.getCurrentPosition( async position => {
  //   let lat = position.coords.latitude
  //   let long = position.coords.longitude
  //   dirtyZipCode = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${config.googleApi}`)
  //   const address = dirtyZipCode.data.results[0].formatted_address
  //   cleanZipCode(address)
  // })

  // const cleanZipCode = address => {
  //   let zipCode = address.split(', ')
  //   zipCode = zipCode[2].split(' ')
  //   zipCode = zipCode[1]
  //   setZipCode(zipCode)
  // } 