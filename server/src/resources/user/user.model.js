import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  name: {
    required: true,
    type: String
  },
  location: {
    type: String
  },
  likedAnimals: {
    type: [Object]
  }
})

export const User = mongoose.model('user', userSchema)
