require('dotenv').config()
import mongoose from 'mongoose'
import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import jwt from 'express-jwt'
import jwksRsa from 'jwks-rsa'

let port = 3001
import authRouter from './resources/user/user.router'
import petRouter from './resources/pet/pet.router'

export const app = express()

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
  algorithm: ["RS256"]
});

console.log('JWT:', checkJwt)

// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
  console.log('$$$$$$$$$$$$', req)
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@doggydate-biwhc.gcp.mongodb.net/api?retryWrites=true&w=majority`
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

// initiate the start of the router
app.use('/api/auth', authRouter) 
app.use('/api/user', petRouter) 

app.post('/api/auth', authRouter) // add a new user
app.get('/api/auth', authRouter) // get all users

app.post('/api/user', petRouter) // Add a new pet
app.get('/api/user', petRouter) // Get all pets in db


export const start = () => {
  app.listen(port, () => {
    console.log('doggydate Express server on port 3001')
  })
}
