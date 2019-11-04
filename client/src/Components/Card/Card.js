import React, { useState } from 'react'
import './Card.css'
import Avatar from '@material-ui/core/Avatar';

const Card = (props) => {

  return (
    <div>
      <Avatar className="avatar" alt="Dog" src="{props.imgURL}" />
      <div className="info">
        <h2>{props.petName} - {props.age} YO</h2> 
        <div><h3>{props.breed} - {props.weight} lbs.</h3></div>
        <div><h3>{props.vaccinated ? <div>Vaccinated: ✅</div>  : <div>Vaccinated: ❌</div>} </h3></div>
        <div><h3>{props.fixed ? <div>Fixed: ✅</div>  : <div>Fixed: ❌</div>} </h3></div>
        <div><h3>{props.energyLevel ? <div>Energy Level: ✅</div>  : <div>Energy Level: ❌</div>} </h3></div>
        <div><h3>{props.heatSensitivity ? <div>Heat Sensitivity: ✅</div>  : <div>Heat Sensitivity: ❌</div>} </h3></div>
        <div><h3>{props.waterCompatiability ? <div>Water Compatiability: ✅</div>  : <div>Water Compatiability: ❌</div>} </h3></div>
      </div>
    </div>
  )
}

export default Card