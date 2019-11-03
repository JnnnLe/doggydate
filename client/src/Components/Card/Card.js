import React, { useState } from 'react'
import './Card.css'
import Avatar from '@material-ui/core/Avatar';

const Card = () => {
  return (
    <div>
      <Avatar className="avatar" alt="Dog" src="https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg" />
    </div>
  )
}

export default Card