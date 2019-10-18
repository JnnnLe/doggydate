import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  userToken: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  location: {
    type: String
  },
  bookedDates: {
    type: Object
  },
  GoogleCalendarAvailability: {
    type: Object
    // Mixed data types, Google might send it back in json
  },
  pets: {
    type: Object
    // mixed data types
    // be sure to reference pet and use compound index
  }
})

export const User = mongoose.model('user', userSchema)
