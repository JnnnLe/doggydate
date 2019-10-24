import { Router } from 'express'
import { User } from './user.models'
import mongoose from 'mongoose'
require('dotenv').config()

const controller = (req, res) => {
  res.send({ message: 'The way that you habitually think determines the way that you habitually feel.' })
}
const router = Router()

let uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@doggydate-biwhc.gcp.mongodb.net/test?retryWrites=true&w=majority`

const createOne = async (req, res) => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  const user =  await User.create({
    username: 'max',
    email: 'max@email.com',
    password: 'password',
    location: 'Oakland'
  })
  res.send(user)
}

router
  // /api/...
  .route('/')
  .get(controller)
  .post(createOne)

router
  // /api/:id...
  .route('/:id')
  .put()
  .delete()
  .get()

export default router
