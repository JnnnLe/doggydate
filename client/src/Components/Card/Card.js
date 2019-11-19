import React from 'react'
import './Card.css'
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios'
import { useAuth0 } from '../../react-auth0-spa'

// import Fab from '@material-ui/core/Fab';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import NavigationIcon from '@material-ui/icons/Navigation';

const Card = (props) => {
  const { getTokenSilently, user } = useAuth0()

  const AddPetToFavorite = async petObject => {
    const token = await getTokenSilently() 

    await axios.post('/feed/user/petId', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      pet: petObject,
      user: user
    })
    .then((response) => {
      console.log('Successfully favorited: ', petObject.name)
    })
    .catch(err => console.log(`Error in Error occurred when adding ${petObject.name} to favorites:`, err))
  }  


  let photos = props.photos // some animals do not have photos
  return (
    <div className="card">
      <Avatar className="avatar" alt={props.name} src={photos.length ? photos[0].medium : null} />
      <div className="info">
        <h4>{props.name !== null ? props.name : null}</h4>
        <div>{props.age} {props.breeds.primary} | {props.contact.address.city}, {props.contact.address.state}</div>
        <div>{props.gender} - {props.size} - {props.coat} {props.colors.primary}  </div>
        <h4>About</h4>
        <div>{props.status}</div> 
        <>{props.description}</>
        <br/>
        {
          props.attributes.house_trained ? 
          "I am house trained." : 
          null 
        }
        <br/>
        {
          props.attributes.shots_current ? 
            "Vaccinations up to date, spayed / neutered." : 
            "Work in progress, to be spayed / neutered and shots to be had"
        } 
        {
          props.attributes.special_needs ?
            <b>Special Needs dog</b> :
            null
        }
      </div>
      <div> <button id={props.id} 
        onClick={(e)=> AddPetToFavorite(props)}>
        ❤️
      </button></div>
    </div>
  )
}

export default Card