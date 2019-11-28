import React, { useEffect, useState } from 'react'
import LargeCard from '../LargeCard/LargeCard'
import { useAuth0 } from '../../react-auth0-spa'
import axios from 'axios'
import SideBar from '../SideBar/SideBar'
import './Favorites.css'

const Favorites = () => {
  const { getTokenSilently, user } = useAuth0()
  const [favorites, setFavorites ] = useState([])
  const getFavorites =  async () => {
    const token =  await getTokenSilently()
       await axios.get('/favorites', {
        params: {
          email: user.email
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => setFavorites(response.data))
      .catch(err => console.log('Error in GetFavorites', err))
  }

  useEffect(() => {
    user && getFavorites()
  }, [user])

  const renderPets = () => {
    let reversedFavorites = favorites.reverse();
    return reversedFavorites.map(dog => <LargeCard key={dog.id} {...dog} />)
  }
    return (
      <div className="favorites">
        <SideBar />
        <div className="favorite__pets">
          {renderPets()}
        </div>
      </div>
    )
}

export default Favorites