require('dotenv').config()
import mongoose from 'mongoose'
import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import jwt from 'express-jwt'
import jwksRsa from 'jwks-rsa'
import axios from 'axios'
import fetch from 'node-fetch'

let port = 3001

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@doggydate-biwhc.gcp.mongodb.net/api?retryWrites=true&w=majority`
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

import { User } from './resources/user/user.model'
import { async } from 'q'
export const app = express()

app.disable('x-powered-by')
app.use(cors())
// preflight request: CORS request that checks to see if the CORS protocol is understood and a server is aware using specific methods and header
app.options('*', cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))


// Set up Auth0 configuration
const authConfig = {
  domain: process.env.DOMAIN,
  audience: process.env.API_IDENTIFIER
}

// Define middleware that validates incoming bearer tokens
// using JWKS from YOUR_DOMAIN
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ['RS256']
});

// Define an endpoint that must be called with an access token
app.get('/api/external', checkJwt, (req, res) => {
  res.send({
    msg: 'Your Access Token was successfully validated!'
  });
});

// registar a new user
app.post('/api/user', async (req, res) => {
  let user = await User.findOne({ email: req.body.email })

  if (user == null) {
    let newUser = await User.create({
      email: req.body.email,
      name: req.body.name
    })
    return res.status(200).send({ msg: `Successfully added new user: ${newUser}`})

  } else {
    return res.status(202).send({ msg: 'Existing user && authenicated.' })
  }
})

const clientId = process.env.PFCLIENTID
const clientSecret = process.env.PFSECRET
const token = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
const url = `https://api.petfinder.com/v2/oauth2/${token}`

// To do: make post request more eloquent
app.get('/feed', async (req, res) => {
  // Make request for OAuth token
  fetch('https://api.petfinder.com/v2/oauth2/token', {
	method: 'POST',
	body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
})
.then(resp => resp.json())
.then(data => res.status(200).send(data))
});


export const start = () => {
  app.listen(port, () => {
    console.log('doggydate Express server on port 3001')
  })
}
