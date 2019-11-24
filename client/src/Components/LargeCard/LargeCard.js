import React from 'react'
import './LargeCard.css'
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios'
import { useAuth0 } from '../../react-auth0-spa'
import { FaDog } from "react-icons/fa"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Card = (props) => {
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
    <div className="large__card">
      <div className="large__card__photo">
      <Carousel>
      {
         photos.map(photo => (
          <div className="large__card__photo-img">
          <img src={photo.large} />
          </div>
        ))

      }
      </Carousel>
      </div>
      <div className="large__card__details">
        <h4 className="large__card__details-name">{props.name}</h4>
        <h5 className="large__card__details-breed">{props.age} {props.breeds.primary}</h5>
        <p className="large__card__details-location">{props.contact.address.city}, {props.contact.address.state}</p>
        <br/>
        {
          props.attributes.house_trained ? 
          <b>I am house trained.</b> : 
          null 
        }
        <a id={props.id} href={props.url} target="_blank"> <FaDog /> Adopt me!</a>
      </div>
    </div>
  )
}

export default Card