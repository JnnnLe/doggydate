import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { useAuth0 } from '../../react-auth0-spa'
import axios from 'axios'
import SideBar from '../SideBar/SideBar'

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
    getFavorites()
  }, [user])

  const renderPets = () => {
    return favorites.map(dog => <Card key={dog.id} {...dog} />)
  }
    return (
      <div>
        <SideBar />
        <h2>Your Saved Pets</h2>{renderPets()}
      </div>
    )
}

export default Favorites