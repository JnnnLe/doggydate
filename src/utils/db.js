// TODO: establish connection to db
import mongoose from 'mongoose'
require('dotenv').config()

let uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@doggydate-biwhc.gcp.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(uri, { useNewUrlParser: true })
const db = mongoose.connection
db.on(`error`, console.error.bind(console, `Connection error with MongoDB:`))
db.once(`open`, () => {
  console.log(`Connected to MongoDB!`)
})
