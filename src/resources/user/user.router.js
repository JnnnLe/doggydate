import { Router } from 'express'
import { User } from './user.model'
import mongoose from 'mongoose'
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@doggydate-biwhc.gcp.mongodb.net/api?retryWrites=true&w=majority`
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const router = Router()

const createOne = async (req, res) => {
  // if field(s) is/are not met
  if (!req.body.username || !req.body.email || !req.body.password || !req.body.location) {
    // res.send('Please include a username, email, password, and location')
    res.sendStatus(400).end()
  }

  const user =  await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    location: req.body.location
  })
  res.send(user)
  res.status(200).end()
  // console.log('Inside of user.router', req.body)
}

const getMany = async (req, res) => {
  const user = await User.find({})
  if (user.length) {
    res.send(user)
    res.status(200).end()
  } else {
    res.send('Sorry, you do not have any users.')
    .status(400).end()
  }
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
