import { Router } from 'express'
import { User } from './user.model'
import mongoose from 'mongoose'
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@doggydate-biwhc.gcp.mongodb.net/api?retryWrites=true&w=majority`
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const router = Router()

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
const getMany = async (req, res) => {
  const user = await User.find({})
  res.send(user)
  res.status(200).end()
}

router
  // /api/user...
  .route('/')
  .get(getMany)
  .post(createOne)

router
  // /api/user:id...
  .route('/:id')
  .put()
  .delete()
  .get()

export default router
