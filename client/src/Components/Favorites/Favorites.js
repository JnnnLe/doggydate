import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { useAuth0 } from '../../react-auth0-spa'
import axios from 'axios'

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
      .then(response => console.log('Favorites FE:', response))
  }

  useEffect(() => {
    getFavorites()
  }, [user])


    return (
      <div>Hello</div>
    )
}

export default Favorites