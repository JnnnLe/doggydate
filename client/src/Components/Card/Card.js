import React from 'react'
import './Card.css'
import Avatar from '@material-ui/core/Avatar';

const Card = (props) => {

  return (
    <div className="card">
    <div>{props.id}</div>
    <div>{props.age}</div>
    <div>{props.gender}</div>
    <div>{props.size}</div>
    <div>{props.status}</div>
    </div>
  )
}

export default Card