import React from 'react'
import './SmallCard.css'
import { FaHeart } from "react-icons/fa"
import axios from 'axios'
import { useAuth0 } from '../../react-auth0-spa'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const SmallCard = (props) => {
  const { getTokenSilently, user } = useAuth0()

  const AddPetToFavorite = async petObject => {
    const notify = () => toast(`You saved ${petObject.name} to your favorites!`, {
      className: 'toast'
    });
    notify()
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
    <div className="small__card">
      <div className="small__card__photo">
        <img className="small__card__photo-img" alt={props.name} src={photos[0].medium} />
      </div>
      <div className="small__card__details">
        <h4 className="small__card__details-name">{props.name}</h4>
        <h5 className="small__card__details-breed">{props.age} {props.breeds.primary}</h5>
        <p className="small__card__details-location">{props.contact.address.city}, {props.contact.address.state}</p>
      </div>
      <div className="small__card__favorite">
        <a id={props.id} onClick={(e)=> AddPetToFavorite(props)}>
        <FaHeart color="#F72067" />
        </a>
      </div>
    </div>
  )
}

export default SmallCard