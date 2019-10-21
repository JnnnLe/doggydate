// after models get started on controller
import { User } from './user.models'
import mongoose from 'mongoose'
import { connect } from 

const run = async ()=> {
  await connect('mongodb://localhost:27017/api')
  const user = await User.create({
    username: 'jnnnle', 
    email: 'jennifer@email.com',
    password: 'password',
    location: 'Oakland'
  })

  console.log(user)
}