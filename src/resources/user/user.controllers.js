// // // after models get started on controller
// import { User } from './user.models'
// import mongoose from 'mongoose'
// // // do I really need this uri? If so, mI need to require .env variables
// // require('dotenv').config({ path: '../../../.env' })

// // let uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@doggydate-biwhc.gcp.mongodb.net/test?retryWrites=true&w=majority`

// const run = async () => {
//   //the code on line 11 was created after a series of error messages, at this point, I don't know what is going on and need to take a step back
//   await mongoose.connect('mongodb://localhost:27017/doggydate', { useNewUrlParser: true, useUnifiedTopology: true })
//   const user = await User.create({
//     username: 'max',
//     email: 'max@email.com',
//     password: 'password',
//     location: 'Oakland'
//   })
//   console.log(User.find({}).exec())
// }

// run()
