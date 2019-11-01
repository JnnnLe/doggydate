import { Router } from 'express'
import { User } from './user.model'
import mongoose from 'mongoose'
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@doggydate-biwhc.gcp.mongodb.net/api?retryWrites=true&w=majority`
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const router = Router()

const createNewUser = async (req, res) => {
  // assuming register new user, so check to see if credentials already exists
  let emailExisitance = await User.find({ email: req.body.email })
  if (!emailExisitance.length) {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
    })
  } else {
    return res.send("Email is already taken.").status(400)
  }
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
  .post(createNewUser)

router
  // /api/user:id...
  .route('/:id')
  .put()
  .delete()
  .get()

export default router
