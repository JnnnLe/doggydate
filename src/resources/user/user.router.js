import { Router } from 'express'
import { User } from './user.model'
import mongoose from 'mongoose'

const router = Router()

const findUserEmail = async (email) => {
  let existingUser = await User.findOne({ email })
  return existingUser ? existingUser : false
}

const createNewUser = async (req, res) => {
  let emailExisitance = await findUserEmail(req.body.email)
  if (emailExisitance == "User was not found.") {
    return res.send("Email is already taken.")
  } else {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
    })
    return res.send('Success').end()
  } 
}

const checkUserCredentials = async (req, res) => {
  let email = await findUserEmail(req.body.email)
  return (email && req.body.password == email.password) ? res.send('Authenticated!') : res.send('Invalid credentials!')
}

const getMany = async (req, res) => {
  const user = await User.find({})
  if (user.length) {
    res.send(user)
    res.status(200).end()
  } else {
    res.send('Sorry, you do not have any users.').status(400).end()
  }
}

router 
  .route('/login')
  .post(checkUserCredentials) // Find user for credentials

  router 
  .route('/register')
  .get(getMany)
  .post(createNewUser) // Create a new user

export default router
