import React, { useState } from 'react'
import './Card.css'
import Avatar from '@material-ui/core/Avatar';

const Card = (props) => {

  return (
    <div>
      <Avatar className="avatar" alt="Dog" src="https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg" />
      <h1>{props.petName}</h1>
    </div>
  )
}

export default Card