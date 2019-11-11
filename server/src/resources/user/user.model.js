import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  sub: {
    required: true,
    type: String
  },
  location: {
    type: String
  },
  bookedDates: {
    type: Object
  },
  GoogleCalendarAvailability: {
    type: Object
    // Todo: Store calendar
    // Mixed data types, Google might send it back in json
  },
  pets: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'pet'
    // required: true
  }
})

export const User = mongoose.model('user', userSchema)
