import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SmallCard from '../SmallCard/SmallCard'
import SideBar from '../SideBar/SideBar'
import './Feed.css'
import { useAuth0 } from '../../react-auth0-spa'

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

  const cleanPets = pets.filter(dog => dog.photos.length > 1 && dog.species === 'Dog')

  const renderPets = () => {
    return cleanPets.map(dog => <SmallCard key={dog.id} {...dog} />)
  }

  return (
    <div className="feed">
      <SideBar />
      <div>
        <form onSubmit={getZip}>
          <input className="search_input" type="text" placeholder="Enter zip code" 
          value={zipCode}
          onChange={e => setZipCode(e.target.value)}/>
        </form>
        <div className="pets">
          {renderPets()}
        </div>
      </div>
    </div>
  )
}

export default Feed
