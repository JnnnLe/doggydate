import React from 'react'
import './LargeCard.css'
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios'
import { useAuth0 } from '../../react-auth0-spa'
import { FaDog, FaHome } from "react-icons/fa"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const LargeCard = (props) => {
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
  console.log(props)
  let photos = props.photos // some animals do not have photos
  return (
    <div className="large__card">
      <Carousel>
      {
         photos.map(photo => (
          <div className="large__card__photo-img">
          <img src={photo.large} height="300px" width="300px"/>
          </div>
        ))
      }
      </Carousel>
      <div classname=".large__card__details">
        <h4 className="large__card__details-name">{props.name}</h4>
        <p className="large__card__details-location"><b>{props.contact.address.city}, {props.contact.address.state}</b></p>
        <div className="large__card__bio">Hi, I'm {props.name} and I am a {props.age} {props.breeds.primary}. Adopt me below.
        <div clasName="large__card__adopt">
          <a className="adopt" id={props.id} href={props.url} target="_blank">  ADOPT ME <FaHome color="#21B3B3"/></a></div>
      </div>
      </div>
    </div>
  )
}

export default LargeCard