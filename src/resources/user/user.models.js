import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  // userToken: {
  //   // Todo: figure out how to generate token
  //   type: String,
  //   required: true,
  //   unique: true,
  //   trim: true
  // },
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
  password: {
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

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next()
  }

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err)
    }

    this.password = hash
    next()
  })
})

userSchema.methods.checkPassword = function(password) {
  const passwordHash = this.password
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err)
      }

      resolve(same)
    })
  })
}

// compound index, sures that the combination of required fields are unique
userSchema.index({ username: 1, email: 1 }, { unique: true })

export const User = mongoose.model('user', userSchema)
