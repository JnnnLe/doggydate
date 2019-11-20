import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { useAuth0 } from '../../react-auth0-spa'
import axios from 'axios'

const Favorites = () => {
  const { getTokenSilently, user } = useAuth0()

  const [ loggedUser, setUser ] = useState(user)
  const [favorites, setFavorites ] = useState([])

  const getFavorites = async () => {
    const token = await getTokenSilently()
    // console.log('FE, email:', email)
    // if (user) {

      await axios.post('/favorites', {
        params: { user: loggedUser },
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => console.log('Favorites FE:', response))
    // }
  }

  useEffect(() => {
    getFavorites()
  }, [])


    return (
      <div>Hello</div>
    )
}

export default Favorites