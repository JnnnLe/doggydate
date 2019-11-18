import React from 'react'
import './Card.css'
import Avatar from '@material-ui/core/Avatar';

const Card = (props) => {
  let photos = props.photos // some animals do not have photos
  return (
    <div className="card">
      <Avatar className="avatar" alt={props.name} src={photos.length ? photos[0].medium : null} />
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
      <br/>
    </div>
  )
}

export default Card