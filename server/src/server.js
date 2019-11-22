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
app.get('/api/external', checkJwt, async (req, res) => {
  await res.send({
    msg: 'Your Access Token was successfully validated!'
  });
});

// register a new user
app.post('/api/user', checkJwt, async (req, res) => {
  let user = await User.findOne({ email: req.body.email })

  if (user == null) {
    let newUser = await User.create({
      email: req.body.email,
      name: req.body.name
    })
    return res.status(200).send({ msg: `Successfully added new user: ${newUser}`})
     
    return res.status(202).send({ msg: 'Existing user && authenicated.' })
  }
})

// // add favorited pet to authorized user
app.post('/feed/user/petId', checkJwt, async (req, res) => {
  let user = await User.updateOne( { email: req.body.user.email }, { $push: {likedAnimals: [req.body.pet]} })

  if (user !== null) {
    return res.status(200).send({ msg: `Successfully added pet ${user.likedAnimals}`})
  } else {   
    return res.status(202).send({ msg: 'Could not save pet to favorites.' })
  }
})

const clientId = process.env.PFCLIENTID
const clientSecret = process.env.PFSECRET

import { Client } from '@petfinder/petfinder-js'
const client = new Client({ apiKey: clientId, secret: clientSecret })

// generates a user token
client.authenticate()
  .then(resp => {
    const token = resp.data.access_token;
    const expires = resp.data.expires_in;
  });

  
// get dogs upon load
app.get('/feed', checkJwt, async (req, response) => {
  await client.animal.search({ type: 'Dog' })
  .then(res => {
    response.send(res.data.animals)
  })
})

// get dogs by zip code
app.get('/feed/zipCode', checkJwt, async (req, response) => {
  await client.animal.search({ location: req.query.zipCode })
  .then(res => {
    response.send(res.data.animals)
  })
})

// get favorited pets
app.get('/favorites', checkJwt, async(req, res) => {
  let user = await User.findOne({ email: req.query.email })
  return res.send((user.likedAnimals))
})

let PORT = process.env.PORT || 3001
export const start = () => {
  app.listen(PORT, () => {
    console.log(`doggydate Express server on port ${PORT}`)
  })
}
