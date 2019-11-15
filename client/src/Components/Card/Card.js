import React from 'react'
import './Card.css'
import Avatar from '@material-ui/core/Avatar';

const Card = (props) => {
  let photos = props.photos // some animals do not have photos
  // console.log('Photos:', photos)
  return (
    <div className="card">
      <Avatar>{photos.length ? photos[0].medium : null}</Avatar>
      <h4>{props.name}</h4>
      <div>{props.age} {props.breeds.primary} | {props.contact.address.city}, {props.contact.address.state}</div>
      <div>{props.gender} - {props.size} - {props.coat} {props.colors.primary}  </div>
      <h4>About</h4>
      <div>{props.status}</div> 
      <br/>
      House Trained: {props.attributes.house_trained}
      <br/>
      Health: 
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
      <br/>
      <p>{props.description}</p>
    </div>
  )
}

export default Card