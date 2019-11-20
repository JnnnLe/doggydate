import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Components/Card/Card'
import NavBar from '../Components/NavBar'
import './Feed.css'
import { useAuth0 } from '../react-auth0-spa'

const Feed = () => {
  const { getTokenSilently } = useAuth0()
  const [ zipCode, setZipCode ] = useState('')
  const [ pets, setPets ] = useState([]) 
  
  const getPets = async () => {
    const token = await getTokenSilently()
    // get first 20 pets with local zip code from PetFinder API
    await axios.get('/feed', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setPets(response.data)
    })
    .catch(err => console.log('Error in getPets:', err))
  }  

  const getZip = async (e) => {
    // get first 20 pets with local zip code from PetFinder API
    e.preventDefault()
    const token = await getTokenSilently()
    await axios.get('/feed/zipCode', {
      params: {
        zipCode
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setPets(response.data)
    })
    .catch(err => console.log('Error in getZip:', err))
  }  

  useEffect(() => {
    getPets()
  }, [setPets])

  const cleanPets = pets.filter(dog => dog.photos.length > 0 && dog.species === 'Dog')

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
