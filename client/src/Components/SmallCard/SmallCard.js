import React from 'react'
import './SmallCard.css'
import Avatar from '@material-ui/core/Avatar';
import { FaHeart } from "react-icons/fa"
import axios from 'axios'
import { useAuth0 } from '../../react-auth0-spa'

const SmallCard = (props) => {
  const { getTokenSilently, user } = useAuth0()

  const AddPetToFavorite = async petObject => {
    const token = await getTokenSilently() 

    await axios.post('/feed/user/petId', {
      pet: petObject,
      user: user
    },
    {
      headers: {
      Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log('Successfully favorited: ', petObject.name)
    })
    .catch(err => console.log(`Error in Error occurred when adding ${petObject.name} to favorites:`, err))
  }  

  let photos = props.photos // some animals do not have photos
  return (
    <div className="card">
      <div className="card__photo">
      <img className="card__photo-img" alt={props.name} src={photos[0].medium} />
      </div>
      <div className="card__details">
        <h4 className="card__details-name">{props.name}</h4>
        <h5 className="card__details-breed">{props.age} {props.breeds.primary}</h5>
        <p className="card__details-location">{props.contact.address.city}, {props.contact.address.state}</p>
        </div>
      <div className="card__favorite">
      <a id={props.id} onClick={(e)=> AddPetToFavorite(props)}>
      <FaHeart size={24} color="red" />
      </a>
      </div>
    </div>
  )
}

export default SmallCard