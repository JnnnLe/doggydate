import mongoose from 'mongoose'

const petSchema = new mongoose.Schema({
  pet_id: {
    type: String,
    unique: true
  },
  petName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  imgURL: String,
  breed: {
    type: String,
    required: true,
    trim: true
  },
  age: Number,
  energyLevel: {
    type: String,
    required: true,
    enum: ['Mellow', 'Likes to play', 'Active', 'Hyper Active']
  },
  weight: Number,
  shots: {
    type: Boolean,
    required: true,
    default: false
  },
  fixed: {
    type: Boolean,
    required: true,
    default: false
  },
  Availability: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user',
    required: true
  }
})

export const Pet = mongoose.model('pet', petSchema)
