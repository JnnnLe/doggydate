import { Router } from 'express'
import { User } from './user.model'
import mongoose from 'mongoose'
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@doggydate-biwhc.gcp.mongodb.net/api?retryWrites=true&w=majority`
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const router = Router()
const controller = (req, res) => {
  res.send({ message: 'The way that you habitually think determines the way that you habitually feel.' })
}


const createOne = async (req, res) => {
  const user =  await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    location: req.body.location
  })
  res.send(user)
  res.status(200).end()
}

// TODO: get user and get all users

router
  // /api/user...
  .route('/')
  .get(controller)
  .post(createOne)

router
  // /api/user:id...
  .route('/:id')
  .put()
  .delete()
  .get()

export default router
