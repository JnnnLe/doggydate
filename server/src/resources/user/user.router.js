import { Router } from 'express'
import { User } from './user.model'
// import mongoose from 'mongoose'

const router = Router()

const findUserEmail = async (email) => {
  let existingUser = await User.findOne({ email })
  return existingUser == null ? null : existingUser
}

const createNewUser = async (req, res) => {
  console.log('INside of CREATE USER')
  let user = await findUserEmail(req.body.email)
  // if (user == null) {
  //   const user = await User.create({
  //     email: req.body.email,
  //     password: req.body.password,
  //   })
  //   return res.send('Success').status(200)
  // } else {
  //   return res.send('Email is already taken.').status(400)
  // }

  console.log('user', user)
}

const checkUserCredentials = async (req, res) => {
  let email = await findUserEmail(req.body.email)
  return (email && req.body.password == email.password) ? res.send('Authenticated!').status(200) : res.send('Invalid credentials!').status(400)
}


router 
  .route('/login')
  .post(checkUserCredentials) // Find user for credentials

  router 
  .route('/register')
  .post(createNewUser) // Create a new user

export default router
